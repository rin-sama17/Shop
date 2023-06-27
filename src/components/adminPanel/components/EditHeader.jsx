import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import {
  deleteSlider,
  editSlider,
  selectSliderDetails,
} from '../../../reducers/sliderSlice'

import { CustomForm, CustomModal } from '../../common'
import { headerFieldsData } from '../../fieldsData'
import { AddBtn, ConfirmDelete } from './'

const EditHeader = ({ header }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { access } = useSelector(selectSliderDetails)

  const formik = useFormik({
    initialValues: header,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        editSlider({
          values: { ...values, lang },
          setOpen,
          resetForm,
          isHeader: true,
        }),
      )
    },
  })
  const fields = headerFieldsData(formik, true)
  const extraFields = [
    {
      sm: 6,
      custom: true,
      customContent: (
        <ConfirmDelete
          itemDelete={deleteSlider}
          item={header}
          isButton
          setOpen={setOpen}
        />
      ),
    },
  ]
  return (
    <>
      <AddBtn
        title="مدیریت سربرگ"
        setOpen={setOpen}
        color="info"
        access={access}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          extraFields={extraFields}
          label="مدیریت سربرگ"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 1000 / 35, width: 1, md: 12 }}
        />
      </CustomModal>
    </>
  )
}

export default EditHeader
