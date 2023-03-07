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
      console.log(updatedSlider)
      await updateSlider(updatedSlider).unwrap()
      setOpen(false)
      toast.success(`اسلایدر ${values.title} با موفقیت ویرایش شد`)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
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
    />
  )
}

export default EditSliderFields
