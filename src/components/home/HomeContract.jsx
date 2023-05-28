import Slider from 'react-slick'
import { Box, Typography, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useRef } from 'react'
import Contract from '../contract/Contract'
import { useGetContractsQuery } from '../../api'
import { PostLoading } from '../loading'

const HomeContract = () => {
  const { data: contracts = [], isSuccess } = useGetContractsQuery()
  const slider = useRef(null)
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    lazyLoad: true,
    rtl: true,
  }
  if (!isSuccess) {
    return (
      <>
        <Typography variant="h6" sx={{ color: 'gray', mt: 3 }} gutterBottom>
          نمایندگی های ما
        </Typography>
        <PostLoading />
      </>
    )
  }
  return (
    <>
      <Typography variant="h6" sx={{ color: 'gray', mt: 3 }} gutterBottom>
        نمایندگی های ما
      </Typography>
      <Button component={Link} to="/contract/index" sx={{ mb: 1 }}>
        مشاهده همه
      </Button>
      <Box
        sx={{
          width: 1,
          mb: 10,
          position: 'relative',
        }}
      >
        <Slider {...settings} ref={slider}>
          {contracts.length > 0 &&
            contracts.map((contract, index) => (
              <Box component="div" key={index} sx={{ direction: 'ltr' }}>
                <Contract contractId={contract.id} />
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
    </>
  )
}

export default HomeContract
