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
  Modal,
  Card,
  Stack,
} from '@mui/material'
import { sliderItem } from '../../../constants/sliderItems'
import { Suspense, useState } from 'react'
const SliderModal = () => {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const formik = useFormik({
    initialValues: { photo: '', title: '', link: '' },
    validationSchema: sliderValidation,
  })
  return (
    <>
      <Grid container spacing={2} sx={{ width: 1 }}>
        {sliderItem &&
          sliderItem.map((item, index) => (
            <Grid xs={6} sm={4} lg={3} key={index}>
              <Button
                sx={{ p: 0, width: 1, height: 150, mr: 1 }}
                onClick={() => {
                  setCurrentImage(index)
                  setOpen(true)
                }}
              >
                <Suspense
                  fallback={
                    <Skeleton
                      height={150}
                      width="100%"
                      animation="pulse"
                      variant="rectangular"
                    />
                  }
                >
                  <CardMedia
                    component="img"
                    alt=""
                    src={item.img}
                    image={item.img}
                    width="100%"
                    height={150}
                  />
                </Suspense>
              </Button>
            </Grid>
          ))}
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Card sx={{ width: '90%', p: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <Grid container spacing={2}>
                <CustomDivider label="ویرایش اسلایدر" />
                <CustomFields
                  formik={formik}
                  name="title"
                  label="عنوان"
                  md={6}
                />
                <CustomFields formik={formik} name="link" label="لینک" md={6} />
                <Grid xs={12} sx={{ display: 'flex' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ m: 1 }}
                  >
                    ویرایش
                  </Button>{' '}
                  <Button
                    fullWidth
                    color="error"
                    variant="contained"
                    size="large"
                    sx={{ m: 1, width: 1 / 3 }}
                  >
                    حذف
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={6}>
              <CardMedia
                component="img"
                alt=""
                src={sliderItem[currentImage].img}
                image={sliderItem[currentImage].img}
                width="100%"
              />
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </>
  )
}

export default SliderModal
