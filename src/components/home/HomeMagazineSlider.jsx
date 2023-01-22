import {
  Box,
  Card,
  Button,
  Typography,
  ImageListItem,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { magazineItems } from '../../constants/magazineItems'
import Slider from 'react-slick'
import { useState, useEffect } from 'react'
import { CustomLoading } from '../common'

const HomeSlider = () => {
  const [loading, setLoading] = useState(true)
  const [newMagazines, setNewMagazines] = useState([])
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const filtredMagazines = magazineItems.sort(
      (objA, objB) => Number(objA.date) - Number(objB.date),
    )

    setNewMagazines(filtredMagazines.slice(0, 4))
    return () => {
      setLoading(false)
    }
  }, [])

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
            src={magazineItems[i].img}
            alt=""
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          {downMd ? null : (
            <Typography
              variant="subtitle2"
              color="secondary"
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
              <LinesEllipsis
                text={magazineItems[i].title}
                maxLine={downMd ? 3 : 5}
              />
            </Typography>
          )}
        </Card>
      )
    },
    dotsClass: 'slick-thumb slick-dots',
    rtl: true,
  }
  return (
    <Box sx={{ mb: 1, width: 1 }}>
      <CustomLoading loading={loading} height="70vh" variant="rectangular">
        <Slider {...settings}>
          {newMagazines.map((slide, index) => (
            <Box component="div" key={index}>
              <ImageListItem>
                <img
                  src={slide.img}
                  srcSet={slide.img}
                  alt={slide.text}
                  style={{ height: '70vh' }}
                />

                <Card
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
                  }}
                >
                  <Box
                    component="div"
                    sx={{ textAlign: 'end', ml: 3, width: '80%' }}
                  >
                    <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
                      {slide.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ direction: 'ltr' }}
                      textAlign="start"
                    >
                      <LinesEllipsis
                        text={slide.caption}
                        maxLine={downMd ? 3 : 5}
                      />
                    </Typography>
                  </Box>
                </Card>
              </ImageListItem>
            </Box>
          ))}
        </Slider>
      </CustomLoading>

      <Button
        component={RouterLink}
        to="/posts"
        color="secondary"
        sx={{ my: 2 }}
        size="large"
      >
        ورود به مجله فروشگاه من
      </Button>
    </Box>
  )
}
export default HomeSlider
