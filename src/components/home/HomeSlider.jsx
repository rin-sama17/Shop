'use client'

import { Box, IconButton, ImageListItem, CardActionArea } from '@mui/material'
import { useRef } from 'react'
import Slider from 'react-slick'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { getSliders } from '@/api'

const HomeSlider = async () => {
  const { sliders } = await getSliders()
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
  if (!isSuccess || sliders.length === 0) {
    return <SliderLoading />
  }

  return (
    <Box sx={{ width: 1, my: 2, position: 'relative' }}>
      <Slider {...settings} ref={slider}>
        {sliders.length > 0 &&
          sliders.map((slide, index) => (
            <Box component="div" key={index}>
              <CardActionArea component="a" href={slide.link} target="_blank">
                <ImageListItem>
                  <img
                    src={slide.photo}
                    srcSet={slide.photo}
                    alt=""
                    style={{ width: '100%' }}
                  />
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
