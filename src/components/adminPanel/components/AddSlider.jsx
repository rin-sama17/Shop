import { Button } from '@mui/material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { sliderValidation } from '../../validations/sliderValidation'
import { sliderFieldsData } from '../../fieldsData'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSlider } from '../../../reducers/sliderSlice'

const AddSlider = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const sliderFieldNames = {
    name: '',
    description: '',
    image: null,
    url: '',
  }
  const formik = useFormik({
    initialValues: sliderFieldNames,
    onSubmit: (values, { resetForm }) => {
      dispatch(addSlider({ values, setOpen, resetForm }))
    },
  })
  const fields = sliderFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت اسلایدر جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="اسلایدر جدید"
          color="warning"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 16 / 5 }}
        />
      </CustomModal>
    </>
  )
}

export default AddSlider
