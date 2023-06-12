import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { CustomForm, CustomModal } from '../../common'
import { sliderValidation } from '../../validations/sliderValidation'

const EditSliderFields = ({ slider }) => {
  const [open, setOpem] = useState(false)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: slider,
    // validationSchema: sliderValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editSlider({ values, setOpen, resetForm }))
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
          label="ویرایش اسلایدر"
          color="success"
          imageUploader
          imageUploaderName="photo"
          imageUploaderProps={{ md: 9, width: 1, aspect: 16 / 5 }}
        />
      </CustomModal>
    </>
  )
}

export default EditSliderFields
