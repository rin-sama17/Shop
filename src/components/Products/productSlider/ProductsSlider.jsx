import {
  Box,
  Card,
  Button,
  Typography,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
  IconButton,
  Skeleton,
  Stack,
  Divider,
  Paper,
} from '@mui/material'
import { useTheme } from '@mui/styles'
import { Link, Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import Slider from 'react-slick'
import Grid from '@mui/material/Unstable_Grid2'
import SlideProduct from './SlideProduct'
import { useRef } from 'react'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
function ProductsSlider({ products }) {
  const slider = useRef(null)
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    Infinity: true,
    lazyLoad: true,
    rtl: true,
  }
  // if (!isSuccess || sliders.length === 0) {
  //   return <SliderLoading />
  // }

  return (
    <Box
      sx={{
        py: 3,
        width: '90%',
        mx: 'auto',
        position: 'relative',
      }}
    >
      <Slider {...settings} ref={slider}>
        {products.map((slide, index) => (
          <SlideProduct productId={slide.id} key={index} />
        ))}
      </Slider>

      <IconButton
        size="small"
        sx={{
          top: '50%',
          left: -40,
          position: 'absolute',
          bgcolor: 'bgBlur.main',
          border: 1,
        }}
        onClick={() => slider.current.slickNext()}
      >
        <KeyboardArrowRight sx={{ color: 'white' }} />
      </IconButton>
      <IconButton
        size="small"
        sx={{
          top: '50%',
          right: -40,
          position: 'absolute',
          bgcolor: 'bgBlur.main',
          border: 1,
        }}
        onClick={() => slider.current.slickPrev()}
      >
        <KeyboardArrowLeft sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  )
}

export default ProductsSlider
