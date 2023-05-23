import Slider from 'react-slick'
import {
  CardActionArea,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Card,
  Paper,
  InputAdornment,
  TextField,
  Button,
  IconButton,
} from '@mui/material'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

import Grid from '@mui/material/Unstable_Grid2'
import { c07, c08, c09, c10, c11, c12, c13, c14 } from '../../assets'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useRef } from 'react'
const contracts = [
  {
    id: 7,
    name: 'نمایندگی',
    photo: c07,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 8,
    name: 'نمایندگی',
    photo: c08,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 9,
    name: 'نمایندگی',
    photo: c09,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 10,
    name: 'نمایندگی',
    photo: c10,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 11,
    name: 'نمایندگی',
    photo: c11,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 12,
    name: 'نمایندگی',
    photo: c12,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 13,
    name: 'نمایندگی',
    photo: c13,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 14,
    name: 'نمایندگی',
    photo: c14,
    discription:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
]

const Contract = ({ contract }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3,
        width: '80%',
        m: '10px auto',
      }}
    >
      <Paper elevation={8}>
        <CardActionArea component={Link} to={`/contract/read/${contract.id}`}>
          <Box
            sx={{
              pb: 2,
            }}
          >
            <CardContent>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
              >
                <Grid xs={12} sm={4}>
                  <img
                    alt={contract.name}
                    src={contract.photo}
                    style={{ margin: 'auto', width: '100%' }}
                  />
                </Grid>
                <Grid xs={12} sm={8}>
                  <Typography
                    color="secondary"
                    variant="subtitle1"
                    textAlign="left"
                    gutterBottom
                  >
                    {contract.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    gutterBotton
                  >
                    <LinesEllipsis text={contract.discription} maxLine={6} />
                  </Typography>{' '}
                </Grid>
              </Grid>
            </CardContent>{' '}
          </Box>
        </CardActionArea>
      </Paper>
    </Box>
  )
}

const HomeContract = () => {
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
            contracts.map((slide, index) => (
              <Box component="div" key={index} sx={{ direction: 'ltr' }}>
                <Contract contract={slide} />
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
