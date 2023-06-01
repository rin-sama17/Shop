import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import { useEditSliderMutation } from '../../../../api'
import { CustomForm } from '../../../common'
import { sliderFieldsData } from '../../../fieldsData'
import { sliderValidation } from '../../../validations/sliderValidation'

const EditSliderFields = ({ slider, setOpen }) => {
  const [updateSlider] = useEditSliderMutation()

  const handleEditSlider = async (values) => {
    try {
      const updatedSlider = { ...values }
      await updateSlider(updatedSlider).unwrap()
      toast.success('با موفقیت ثبت شد')
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: {
      ...slider,
    },
    validationSchema: sliderValidation,
    onSubmit: (values, { resetForm }) => {
      handleEditSlider(values)
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
