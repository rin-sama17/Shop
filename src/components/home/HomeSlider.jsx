import {
  Box,
  Button,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material'
import { useRef } from 'react'
import { sliderItem } from '../../constants/sliderItems'
import Slider from 'react-slick'
import { useState, useEffect } from 'react'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { CustomLoading } from '../common'

const HomeSlider = () => {
  const slider = useRef(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const lazyLoad = setTimeout(() => setLoading(false), 3000)
    return () => {
      clearTimeout(lazyLoad)
    }
  }, [])

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
  return (
    <Box>
      {' '}
      <CustomLoading height="90vh" variant="rectangular" loading={loading}>
        <Slider {...settings} ref={slider}>
          {sliderItem.map((slide, index) => (
            <Box component="div" key={index}>
              <ImageListItem>
                <img src={slide.img} srcSet={slide.img} alt={slide.text} />
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
                      <Typography variant="h4">{slide.text}</Typography>
                      <Button color="secondary">اطلاعات بیشتر</Button>
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
      </CustomLoading>
    </Box>
  )
}
export default HomeSlider
