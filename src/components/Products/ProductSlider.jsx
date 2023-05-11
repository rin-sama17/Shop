import React from 'react'
import Product from './Product.jsx'
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

const ProductSlider = ({ products }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  const [dragging, setDragging] = React.useState(false)

  const handleBeforeChange = React.useCallback(() => {
    console.log('handleBeforeChange')
    setDragging(true)
  }, [setDragging])

  const handleAfterChange = React.useCallback(() => {
    console.log('handleAfterChange')
    setDragging(false)
  }, [setDragging])

  const handleOnItemClick = React.useCallback(
    (e) => {
      console.log('handleOnItemClick')
      if (dragging) e.stopPropagation()
    },
    [dragging],
  )
  return (
    <Box>
      <Slider
        {...settings}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        {products &&
          products.map((product, index) => (
            <Box component="dev" key={index} onClickCapture={handleOnItemClick}>
              <Product productId={product.id} />
            </Box>
          ))}
      </Slider>
    </Box>
  )
}

export default ProductSlider
