import Grid from '@mui/material/Unstable_Grid2'
import { CustomDivider, CustomFields } from '../../common'
import { useFormik } from 'formik'
import { sliderValidation } from '../../validations/sliderValidation'
import { CardMedia, Button } from '@mui/material'
import { useDeleteSliderMutation, useGetSliderQuery } from '../../../api'
import SliderLoading from '../../loading/SliderLoading'
import { toast } from 'react-toastify'
const Slider = ({ sliderId, setOpen }) => {
  const { data: slider, isLoading } = useGetSliderQuery(sliderId)
  const [deleteSlider] = useDeleteSliderMutation()

  const handleDeleteSlider = async () => {
    try {
      await deleteSlider(slider.id).unwrap()
      toast.success(`اسلایدر ${slider.title} با موفقیت حذف شد`)
      setOpen(false)
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: !isLoading
      ? {
          photo: slider.photo,
          title: slider.title,
          link: slider.link,
        }
      : { photo: '', title: '', link: '' },
    validationSchema: sliderValidation,
  })

  if (isLoading) {
    return <SliderLoading />
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Grid container spacing={2}>
          <CustomDivider label="ویرایش اسلایدر" />
          <CustomFields formik={formik} name="title" label="عنوان" md={6} />
          <CustomFields formik={formik} name="link" label="لینک" md={6} />
          <Grid xs={12} sx={{ display: 'flex' }}>
            <Button fullWidth variant="contained" size="large" sx={{ m: 1 }}>
              ویرایش
            </Button>{' '}
            <Button
              fullWidth
              color="error"
              variant="contained"
              size="large"
              onClick={handleDeleteSlider}
              sx={{ m: 1, width: 1 / 3 }}
            >
              حذف
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} md={6}>
        <CardMedia component="img" alt="" image={slider.photo} width="100%" />
      </Grid>
    </Grid>
  )
}

export default Slider
