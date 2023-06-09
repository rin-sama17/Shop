import {
  Box,
  Card,
  Button,
  Typography,
  IconButton,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
  Skeleton,
  Stack,
  Divider,
  Paper,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LinesEllipsis from 'react-lines-ellipsis'
import { Suspense, useRef } from 'react'
import Slider from 'react-slick'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useGetSlidersQuery } from '../../api'
import { SliderLoading } from '../loading'
import { Link } from 'react-router-dom'

import { category01, category02, category03 } from '../../assets'
const sliders = [
  {
    id: 7,
    name: 'پست اول',
    image: category01,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 8,
    name: 'پست دوم',
    image: category02,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 9,
    name: 'پست سوم',
    image: category03,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
]
const HomeSlider = () => {
  // const { data: sliders = [], isSuccess } = useGetSlidersQuery()
  const slider = useRef(null)
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    lazyLoad: true,
    rtl: true,
  }
  // if (!isSuccess || sliders.length === 0) {
  //   return <SliderLoading />
  // }

  return (
    <Box
      sx={{
        width: '90%',
        mx: 'auto',
        position: 'relative',
      }}
    >
      <Slider {...settings} ref={slider}>
        {sliders.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <img
                src={`${slide.image}`}
                alt={slide.name}
                style={{ height: '40vh', borderRadius: '0 0 20px  20px ' }}
              />

              <CardActionArea
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '0 0 20px  20px ',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flexWrap: 'wrap',
                  position: 'absolute',
                  bottom: 0,
                  bgcolor: 'bgBlur.main',
                  width: 1,
                  height: 1,
                  px: 1,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ width: 1, display: 'flex', justifyContent: 'center' }}
                >
                  <Grid
                    xs={4}
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      justifyContent: 'center',
                    }}
                  >
                    <Paper elevation={12} sx={{ borderRadius: 20 }}>
                      <img
                        src={`${slide.image}`}
                        alt={slide.name}
                        style={{ width: 200, height: 200, borderRadius: 20 }}
                      />
                    </Paper>
                  </Grid>
                  <Grid xs={7} sx={{ textAlign: 'end' }}>
                    <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                      {slide.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{ direction: 'ltr' }}
                      textAlign="start"
                      color="whitesmoke"
                    >
                      <LinesEllipsis text={slide.summery} maxLine={4} />
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ borderRadius: '0  20px  0 20px ', mt: 1 }}
                    >
                      اطلاعات بیشتر
                    </Button>
                  </Grid>
                </Grid>
              </CardActionArea>
            </ImageListItem>
          </Box>
        ))}
      </Slider>

      <Box
        size="small"
        sx={{
          top: '50%',
          left: 10,
          position: 'absolute',
        }}
        onClick={() => slider.current.slickNext()}
      >
        <KeyboardArrowRight sx={{ color: 'white' }} />
      </Box>
      <Box
        size="small"
        sx={{
          top: '50%',
          right: 10,
          position: 'absolute',
        }}
        onClick={() => slider.current.slickPrev()}
      >
        <KeyboardArrowLeft sx={{ color: 'white' }} />
      </Box>
    </Box>
  )
}
export default HomeSlider
