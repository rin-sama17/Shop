import { Box, Typography, ImageListItem } from '@mui/material'
import Slider from 'react-slick'

import { c01, c02, c03, c04, c05, c06 } from '../../assets'
const HomeContract = () => {
  const contracts = [c01, c02, c03, c04, c05, c06]

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    lazyLoad: true,
    rtl: true,
  }
  return (
    <>
      <Typography variant="h6" sx={{ color: 'gray', my: 3 }}>
        اعتماد شما اعتبار ماست
      </Typography>
      <Box sx={{ width: 1, mb: 10 }}>
        <Slider {...settings}>
          {contracts.length > 0 &&
            contracts.map((slide, index) => (
              <Box component="div" key={index}>
                <ImageListItem
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img
                    src={slide}
                    srcSet={slide}
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </ImageListItem>
              </Box>
            ))}
        </Slider>
      </Box>
    </>
  )
}

export default HomeContract
