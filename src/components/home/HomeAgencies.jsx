import Slider from 'react-slick'
import { Box, Typography, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useRef } from 'react'
import { Agency } from '../agency'
import { useGetAgenciesQuery } from '../../api'
import { AgencyLoading } from '../loading'

const HomeAgencies = () => {
  const { data = { agencies: [] }, isSuccess } = useGetAgenciesQuery()
  const agencies = data.agencies
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
        <AgencyLoading />
      </>
    )
  }
  return (
    <>
      <Typography variant="h6" sx={{ color: 'gray', mt: 3 }} gutterBottom>
        نمایندگی های ما
      </Typography>
      <Button component={Link} to="/agencies" sx={{ mb: 1 }}>
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
          {agencies.length > 0 &&
            agencies.map((agency, index) => (
              <Box component="div" key={index} sx={{ direction: 'ltr' }}>
                <Agency agencyId={agency.id} />
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

export default HomeAgencies
