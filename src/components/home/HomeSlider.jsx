import {
  Box,
  Button,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import { useRef } from 'react'
import Slider from 'react-slick'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useGetSlidersQuery } from '../../api'
import { SliderLoading } from '../loading'
import { Link } from 'react-router-dom'

const HomeSlider = () => {
  const { data: sliders = [], isLoading } = useGetSlidersQuery()
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

  if (isLoading) {
    return <SliderLoading />
  }

  return (
    <Box>
      {' '}
      <Slider {...settings} ref={slider}>
        {sliders.length > 0 &&
          sliders.map((slide, index) => (
            <Box component="div" key={index}>
              <ImageListItem>
                <img src={slide.photo} srcSet={slide.photo} alt={slide.title} />
                <ImageListItemBar
                  sx={{
                    bgcolor: 'bgBlur.main',
                    height: 1,
                  }}
                  title={
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="h4" color="text.primary">
                        {slide.title}
                      </Typography>
                      <Button size="large" href={slide.link} target="_blank">
                        <Typography variant="subtitle1" color="primary">
                          اطلاعات بیشتر
                        </Typography>
                      </Button>
                      <Button
                        sx={{ left: 10, position: 'absolute' }}
                        onClick={() => slider.current.slickNext()}
                      >
                        <KeyboardArrowRight />
                      </Button>
                      <Button
                        sx={{ right: 10, position: 'absolute' }}
                        onClick={() => slider.current.slickPrev()}
                      >
                        <KeyboardArrowLeft />
                      </Button>
                    </Box>
                  }
                />
              </ImageListItem>
            </Box>
          ))}
      </Slider>
    </Box>
  )
}
export default HomeSlider
