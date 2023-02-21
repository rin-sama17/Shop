import Grid from '@mui/material/Unstable_Grid2'
import HomeSlider from '../../home/HomeSlider'
import { ImageUploader, CustomDivider, CustomFields } from '../../common'
import { useFormik } from 'formik'
import { sliderValidation } from '../../validations/sliderValidation'
import {
  Box,
  ImageListItem,
  CardMedia,
  Button,
  Typography,
  Stack,
} from '@mui/material'
import { sliderItem } from '../../../constants/sliderItems'
import { Suspense } from 'react'
import SliderModal from './SliderModal'
import { useAddNewSliderMutation } from '../../../api'
import { toast } from 'react-toastify'
import { nanoid } from '@reduxjs/toolkit'
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

  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Grid container sx={{ px: 2, pt: 4 }} spacing={2}>
          <CustomDivider label="اسلاید جدید" />
          <ImageUploader
            name="photo"
            formik={formik}
            width={1}
            color="info"
            md={12}
          />
          <Grid xs={12} sx={{ direction: 'ltr' }}>
            <Typography variant="caption" color="text.secondary">
              برای تجربه کاربری بهتر عکس هایی با ارتفاع یکسان وارد نمایید
            </Typography>
          </Grid>
          <CustomFields formik={formik} name="title" label="عنوان" md={6} />
          <CustomFields formik={formik} name="link" label="لینک" md={6} />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ my: 2 }}
          >
            افزودن
          </Button>
        </Grid>
      </form>
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
