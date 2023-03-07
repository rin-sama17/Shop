import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { nanoid } from '@reduxjs/toolkit'
import { Box } from '@mui/material'

import { HomeSlider } from '../../home'
import { SliderModal } from '../components'
import { sliderValidation } from '../../validations/sliderValidation'
import { useAddNewSliderMutation } from '../../../api'
import { CustomForm, CustomDivider } from '../../common'
import { sliderFieldsData } from '../../fieldsData'

const SliderManagement = () => {
  const [addNewSlider] = useAddNewSliderMutation()

  const handleAddNewSlider = async (values) => {
    try {
      const { photo, title, link } = values
      await addNewSlider({
        id: nanoid(),
        photo,
        title,
        link,
      })
      toast.success('اسلاید با موفقیت اضافه شد')
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: { photo: '', title: '', link: '' },
    validationSchema: sliderValidation,
    onSubmit: (values, { resetForm }) => {
      handleAddNewSlider(values)
      resetForm()
    },
  })
  const fields = sliderFieldsData(formik)
  return (
    <>
      <CustomForm
        formik={formik}
        fields={fields}
        label="اسلایدر جدید"
        color="info"
        imageUploader
        imageUploaderName="photo"
        imageUploaderProps={{
          md: 12,
          width: 1,
        }}
      />
      <CustomDivider label="مدیریت اسلاید ها" />
      <SliderModal />
      <Box sx={{ px: 3 }}>
        <CustomDivider label="پیش نمایش" />
        <HomeSlider />
      </Box>
    </>
  )
}

export default SliderManagement
