import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import { editSlider } from '../../../reducers/sliderSlice'

import { CustomForm, CustomModal } from '../../common'
import { sliderFieldsData } from '../../fieldsData'

const EditSlider = ({ slider }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const handleSubmit = (values, resetForm) => {
    dispatch(editSlider({ values: { ...values, lang }, setOpen, resetForm }))
  }
  const formik = useFormik({
    initialValues: slider,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm)
    },
  })
  const fields = useMemo(() => sliderFieldsData(formik, slider.type), [
    formik,
    slider,
  ])

  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="ویرایش اسلایدر"
          color="success"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{
            aspect: slider.type === 0 ? 1080 / 350 : 1 / 1,
          }}
        />
      </CustomModal>
    </>
  )
}

export default EditSlider
