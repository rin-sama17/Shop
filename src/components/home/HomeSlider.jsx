import {
  Box,
  Button,
  Typography,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  CardActionArea,
} from '@mui/material'
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
    photo: category01,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 8,
    name: 'پست دوم',
    photo: category02,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 9,
    name: 'پست سوم',
    photo: category03,
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
    <Box sx={{ width: 1, my: 2, position: 'relative' }}>
      <Slider {...settings} ref={slider}>
        {sliders.length > 0 &&
          sliders.map((slide, index) => (
            <Box component="div" key={index}>
              <CardActionArea component="a" href={slide.link} target="_blank">
                <ImageListItem>
                  <Suspense fallback={<SliderLoading />}>
                    <img
                      src={slide.photo}
                      srcSet={slide.photo}
                      alt=""
                      style={{
                        width: '100%',
                        height: '30vh',
                        objectFit: 'cover',
                      }}
                    />
                  </Suspense>
                </ImageListItem>
              </CardActionArea>
            </Box>
          ))}
      </Slider>

      <IconButton
        size="small"
        sx={{
          top: '50%',
          left: 10,
          position: 'absolute',
          bgcolor: 'bgBlur.main',
        }}
        onClick={() => slider.current.slickNext()}
      >
        <KeyboardArrowRight sx={{ color: 'white' }} />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          top: '50%',
          right: 10,
          position: 'absolute',
          bgcolor: 'bgBlur.main',
        }}
        onClick={() => slider.current.slickPrev()}
      >
        <KeyboardArrowLeft sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  )
}
export default HomeSlider
