import { Edit } from '@mui/icons-material'
import { Button } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectLang } from '../../../reducers/langSlice'
import { editSlider } from '../../../reducers/sliderSlice'

import { CustomForm, CustomModal } from '../../common'
import { sliderFieldsData } from '../../fieldsData'
import { sliderValidation } from '../../validations/sliderValidation'

const EditSlider = ({ slider }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  console.log(slider)
  const formik = useFormik({
    initialValues: { ...slider, lang },
    // validationSchema: sliderValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editSlider({ values, setOpen, resetForm }))
    },
  })
  const fields = sliderFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        label="ویرایش"
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
          imageUploaderProps={{ aspect: 1 / 1 }}
        />
      </CustomModal>
    </>
  )
}

export default EditSlider
