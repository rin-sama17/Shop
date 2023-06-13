import {
  Box,
  Card,
  Button,
  Typography,
  IconButton,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
  Skeleton,
  Stack,
  Divider,
  Paper,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LinesEllipsis from 'react-lines-ellipsis'
import { Suspense, useRef } from 'react'
import Slider from 'react-slick'

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useGetSlidersQuery } from '../../api'
import { SliderLoading } from '../loading'

const HomeSlider = ({ sliders }) => {
  const slider = useRef(null)
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
    <Box
      sx={{
        width: '90%',
        mx: 'auto',
        position: 'relative',
      }}
    >
      <Slider {...settings} ref={slider}>
        {sliders.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <img
                src={`http://localhost:8000/${slide.image}`}
                alt={slide.name}
                style={{ height: '40vh', borderRadius: '0 0 20px  20px ' }}
              />

              <CardActionArea
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '0 0 20px  20px ',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flexWrap: 'wrap',
                  position: 'absolute',
                  bottom: 0,
                  bgcolor: 'bgBlur.main',
                  width: 1,
                  height: 1,
                  px: 1,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{ width: 1, display: 'flex', justifyContent: 'center' }}
                >
                  <Grid
                    xs={4}
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      justifyContent: 'center',
                    }}
                  >
                    <Paper elevation={12} sx={{ borderRadius: 15 }}>
                      <img
                        src={`http://localhost:8000/${slide.image}`}
                        alt={slide.name}
                        style={{
                          width: 200,
                          height: 200,
                          borderRadius: '60px',
                        }}
                      />
                    </Paper>
                  </Grid>
                  <Grid
                    xs={7}
                    sx={{
                      textAlign: 'end',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Box>
                      <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                        {slide.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{ direction: 'ltr' }}
                        textAlign="start"
                        color="whitesmoke"
                      >
                        <LinesEllipsis text={slide.description} maxLine={4} />
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      component="a"
                      href={slide.url}
                      target="_blank"
                      sx={{ borderRadius: '0  20px  0 20px ', mt: 1 }}
                    >
                      اطلاعات بیشتر
                    </Button>
                  </Grid>
                </Grid>
              </CardActionArea>
            </ImageListItem>
          </Box>
        ))}
      </Slider>

      <Box
        size="small"
        sx={{
          top: '50%',
          left: 10,
          position: 'absolute',
        }}
        onClick={() => slider.current.slickNext()}
      >
        <KeyboardArrowRight sx={{ color: 'white' }} />
      </Box>
      <Box
        size="small"
        sx={{
          top: '50%',
          right: 10,
          position: 'absolute',
        }}
        onClick={() => slider.current.slickPrev()}
      >
        <KeyboardArrowLeft sx={{ color: 'white' }} />
      </Box>
    </Box>
  )
}
export default HomeSlider
