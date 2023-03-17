import {
  Box,
  Button,
  Typography,
  IconButton,
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
  if (sliders.length === 0) {
    return <Box sx={{ height: 60 }} />
  } else if (isLoading) {
    return <SliderLoading />
  }

  return (
    <Box sx={{ mt: sliders == [] ? 4 : 0 }}>
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
                      <Button size="small" href={slide.link} target="_blank">
                        <Typography variant="subtitle2" color="primary">
                          اطلاعات بیشتر
                        </Typography>
                      </Button>
                      <IconButton
                        sx={{ left: 10, position: 'absolute' }}
                        onClick={() => slider.current.slickNext()}
                      >
                        <KeyboardArrowRight />
                      </IconButton>
                      <IconButton
                        sx={{ right: 10, position: 'absolute' }}
                        onClick={() => slider.current.slickPrev()}
                      >
                        <KeyboardArrowLeft />
                      </IconButton>
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
