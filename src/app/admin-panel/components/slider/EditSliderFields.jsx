import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import { CustomForm } from '@/components/common'
import { sliderFieldsData } from '../../fieldsData'
import { sliderValidation } from '../../validations/sliderValidation'

const EditSliderFields = ({ slider, setOpen }) => {
  const updateSlider = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/sliders/update/${values.id}`
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: values,
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
    }
  }

  const formik = useFormik({
    initialValues: slider,
    validationSchema: sliderValidation,
    onSubmit: (values, { resetForm }) => {
      updateSlider(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = sliderFieldsData(formik)
  return (
    <CustomForm
      formik={formik}
      fields={fields}
      label="ویرایش اسلایدر"
      color="success"
      imageUploader
      imageUploaderName="photo"
      imageUploaderProps={{ md: 9, width: 1, aspect: 16 / 5 }}
    />
  )
}

export default EditSliderFields
