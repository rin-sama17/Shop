import {
  Box,
  Button,
  Typography,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
  Paper,
  useTheme,
  CardMedia,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LinesEllipsis from 'react-lines-ellipsis'
import { useRef } from 'react'
import Slider from 'react-slick'

import { useTranslation } from 'react-i18next'
import { SliderArrows } from '../common'

const HomeSlider = ({ sliders }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
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
        direction: 'rtl',
      }}
    >
      <Slider {...settings} ref={slider}>
        {sliders.map((slide, index) => (
          <Box component="div" key={index}>
            {slide.type === 0 ? (
              <CardMedia
                component="img"
                image={`http://localhost:8000/${slide.image}`}
                alt={slide.name}
                sx={{
                  height: { xs: '20vh', sm: '30vh', md: '45vh' },
                  borderRadius: '0 0 20px  20px ',
                }}
              />
            ) : (
              <ImageListItem>
                <CardMedia
                  component="img"
                  image={`http://localhost:8000/${slide.image}`}
                  alt={slide.name}
                  sx={{
                    height: { xs: '20vh', sm: '30vh', md: '45vh' },
                    borderRadius: '0 0 20px  20px ',
                  }}
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
                    sx={{
                      width: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Grid
                      xs={4}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Paper
                        elevation={12}
                        sx={{
                          width: { xs: 100, sm: 150, md: 200 },
                          height: { xs: 100, sm: 150, md: 200 },
                          borderRadius: '20%',
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={`http://localhost:8000/${slide.image}`}
                          alt={slide.name}
                          sx={{
                            width: { xs: 100, sm: 150, md: 200 },
                            height: { xs: 100, sm: 150, md: 200 },
                            borderRadius: '20%',
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
                        <Typography
                          variant="subtitle1"
                          color="white"
                          sx={{ mb: 1 }}
                        >
                          {slide.name}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{ direction: 'ltr' }}
                          textAlign="start"
                          color="whitesmoke"
                        >
                          <LinesEllipsis
                            text={slide.description}
                            maxLine={downMd ? 3 : 4}
                          />
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        component="a"
                        href={slide.url}
                        target="_blank"
                        size="small"
                        sx={{ borderRadius: '10px  20px  10px 20px ', mt: 1 }}
                      >
                        {t('اطلاعات بیشتر')}
                      </Button>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </ImageListItem>
            )}
          </Box>
        ))}
      </Slider>
      <SliderArrows slider={slider} />
    </Box>
  )
}
export default HomeSlider
