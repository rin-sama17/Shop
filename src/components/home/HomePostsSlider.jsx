import {
  Box,
  Card,
  Button,
  Typography,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
  Skeleton,
  Stack,
  Divider,
  Paper,
} from '@mui/material'
import { useTheme } from '@mui/styles'
import { Link, Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import Slider from 'react-slick'
import { useGetPostsQuery } from '../../api'
import Grid from '@mui/material/Unstable_Grid2'
import { category01, category02, category03 } from '../../assets'
const posts = [
  {
    id: 7,
    name: 'پست اول',
    image: category01,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفیبا همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 8,
    name: 'پست دوم',
    image: category02,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
  {
    id: 9,
    name: 'پست سوم',
    image: category03,
    summery:
      'از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.از این رو با همکاری سازمانها، تعاونی ها و ارگانها و همچنین پشتیبانی شبکه بانکی کشور، روشهای مناسبی برای هر کدام از صنوف مختلف را در نظر گرفته که در ادامه معرفی شده اند.',
  },
]
const HomePostsSlider = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

  // const { data: posts = [], isSuccess } = useGetPostsQuery()

  const settings = {
    dots: true,
    arrows: false,
    customPaging: (i) => {
      return (
        <Card
          sx={{
            bgcolor: 'bgBlur.main',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img
            src={posts[i].image}
            alt=""
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
            }}
          />
          {downMd ? null : (
            <Typography
              variant="subtitle2"
              color="primary"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
                direction: 'ltr',
                mx: 1,
              }}
            >
              <LinesEllipsis text={posts[i].name} maxLine={1} />
            </Typography>
          )}
        </Card>
      )
    },
    dotsClass: 'slick-thumb slick-dots',
    rtl: true,
  }

  // if (!isSuccess) {
  //   return <Skeleton width="100%" height="90vh" />
  // }

  return (
    <Box sx={{ mb: 1, width: 1 }}>
      <Typography variant="h6" sx={{ color: 'gray', mb: 3 }}>
        از مجله ما دیدن کنید
      </Typography>
      <Slider {...settings}>
        {posts.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <img
                src={slide.image}
                srcSet={slide.image}
                alt={slide.name}
                style={{ height: '60vh' }}
              />

              <CardActionArea
                component={Link}
                to={`/post/read/${slide.id}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flexWrap: 'wrap',
                  position: 'absolute',
                  bottom: 0,
                  bgcolor: 'bgBlur.main',
                  width: 1,
                  height: 1,
                  borderRadius: 0,
                  px: 1,
                }}
              >
                <Grid
                  // component={Grid}
                  container
                  spacing={2}
                  // direction="row"
                  // divider={<Divider orientation="vertical" flexItem />}
                  sx={{ width: 1, display: 'flex', justifyContent: 'center' }}
                >
                  <Grid
                    xs={12}
                    md={3}
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      justifyContent: 'center',
                    }}
                  >
                    <Paper elevation={12} sx={{ p: 0.3 }}>
                      <img
                        src={slide.image}
                        srcSet={slide.image}
                        alt={slide.name}
                        style={{ width: '100%' }}
                      />
                    </Paper>
                  </Grid>
                  <Grid xs={12} md={8} sx={{ textAlign: 'end' }}>
                    <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                      {slide.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{ direction: 'ltr' }}
                      textAlign="start"
                      color="whitesmoke"
                    >
                      <LinesEllipsis
                        text={slide.summery}
                        maxLine={downMd ? 3 : 5}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </ImageListItem>
          </Box>
        ))}
      </Slider>

      <Button
        component={RouterLink}
        to="/post/index"
        color="secondary"
        sx={{ my: 2 }}
        size="large"
      >
        ورود به مجله فروشگاه من
      </Button>
    </Box>
  )
}
export default HomePostsSlider
