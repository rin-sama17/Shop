import { useFormik } from 'formik'
import { toast } from 'react-toastify'

import { useEditSliderMutation } from '../../../../api/adminApi'
import { CustomForm } from '../../../common'
import { sliderFieldsData } from '../../../fieldsData'
import { sliderValidation } from '../../../validations/sliderValidation'

const EditSliderFields = ({ slider, setOpen }) => {
  const [updateSlider] = useEditSliderMutation()

  const handleEditSlider = async (values) => {
    try {
      const updatedSlider = { ...values }
      await updateSlider(updatedSlider).unwrap()
      setOpen(false)
      toast.success(`اسلایدر ${values.title} با موفقیت ویرایش شد`)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      ...slider,
    },
    validationSchema: sliderValidation,
    onSubmit: (values) => {
      handleEditSlider(values)
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
      imageUploaderProps={{ aspect: 16 / 5 }}
    />
  )
}

export default EditSliderFields
