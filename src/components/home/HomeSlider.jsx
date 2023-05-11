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
    <Box sx={{ width: 1, my: 2 }}>
      <Slider {...settings} ref={slider}>
        {sliders.length > 0 &&
          sliders.map((slide, index) => (
            <Box component="div" key={index}>
              <ImageListItem>
                <img
                  src={slide.photo}
                  srcSet={slide.photo}
                  alt=""
                  style={{ width: '100%' }}
                />
                <ImageListItemBar
                  sx={{ bgcolor: 'rgba(227, 242, 253,0)', height: 1 }}
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
                      <IconButton
                        sx={{
                          left: 10,
                          position: 'absolute',
                          bgcolor: 'whitesmoke',
                        }}
                        onClick={() => slider.current.slickNext()}
                      >
                        <KeyboardArrowRight sx={{ color: 'black' }} />
                      </IconButton>
                      <IconButton
                        sx={{
                          right: 10,
                          position: 'absolute',
                          bgcolor: 'whitesmoke',
                        }}
                        onClick={() => slider.current.slickPrev()}
                      >
                        <KeyboardArrowLeft sx={{ color: 'black' }} />
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
