import Slider from 'react-slick'
import { Box, Typography, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useRef } from 'react'
import { Agency } from '../agency'
import { useGetAgenciesQuery } from '../../api'
import { PostLoading } from '../loading'
import { c07, c08, c09, c10, c11, c12, c13, c14 } from '../../assets'
const agencies = [
  {
    id: 7,
    name: 'نمایندگی',
    photo: c07,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 8,
    name: 'نمایندگی',
    photo: c08,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 9,
    name: 'نمایندگی',
    photo: c09,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 10,
    name: 'نمایندگی',
    photo: c10,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 11,
    name: 'نمایندگی',
    photo: c11,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 12,
    name: 'نمایندگی',
    photo: c12,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 13,
    name: 'نمایندگی',
    photo: c13,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
  {
    id: 14,
    name: 'نمایندگی',
    photo: c14,
    address: 'نعمت اباد خیابان شگکوفه جنب پارک شریعتی پلاک 3',
    phone: '021 9328 49384',
  },
]
const HomeAgencies = () => {
  // const { data: agencies = [], isSuccess } = ageGetAgenciesQuery()
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
  // if (!isSuccess) {
  //   return (
  //     <>
  //       <Typography variant="h6" sx={{ color: 'gray', mt: 3 }} gutterBottom>
  //         نمایندگی های ما
  //       </Typography>
  //       <PostLoading />
  //     </>
  //   )
  // }
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
                <Agency agency={agency} />
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
