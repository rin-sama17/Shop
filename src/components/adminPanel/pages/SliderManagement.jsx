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
  Skeleton,
  Stack,
} from '@mui/material'
import { sliderItem } from '../../../constants/sliderItems'
import { Suspense } from 'react'
import SliderModal from './SliderModal'
const SliderManagement = () => {
  const formik = useFormik({
    initialValues: { photo: '', title: '', link: '' },
    validationSchema: sliderValidation,
  })
  return (
    <>
      <Grid container sx={{ px: 2, pt: 4 }} spacing={2}>
        <CustomDivider label="اسلاید جدید" />
        <ImageUploader
          name="photo"
          formik={formik}
          width={1}
          color="info"
          md={12}
        />
        <CustomFields formik={formik} name="title" label="عنوان" md={6} />
        <CustomFields formik={formik} name="link" label="لینک" md={6} />
        <Button fullWidth variant="contained" size="large" sx={{ my: 2 }}>
          افزودن
        </Button>
        <CustomDivider label="مدیریت اسلاید ها" />
        <SliderModal />
      </Grid>
      <Box sx={{ px: 3 }}>
        <CustomDivider label="پیش نمایش" />
        <HomeSlider />
      </Box>
    </>
  )
}

export default SliderManagement
