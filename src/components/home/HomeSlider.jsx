import {
  Box,
  Button,
  Typography,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  CardActionArea,
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
    // autoplay: true,
    // autoplaySpeed: 5000,
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
    <Box sx={{ width: 1, my: 2, position: 'relative' }}>
      <Slider {...settings} ref={slider}>
        {sliders.length > 0 &&
          sliders.map((slide, index) => (
            <Box component="div" key={index}>
              <CardActionArea component={Link} to={slide.link}>
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
        sx={{
          top: '50%',
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
          top: '50%',
          right: 10,
          position: 'absolute',
          bgcolor: 'whitesmoke',
        }}
        onClick={() => slider.current.slickPrev()}
      >
        <KeyboardArrowLeft sx={{ color: 'black' }} />
      </IconButton>
    </Box>
  )
}
export default HomeSlider
