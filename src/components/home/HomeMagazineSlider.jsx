import {
  Box,
  Card,
  Button,
  Typography,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../reducers/postSlice'

const HomeSlider = () => {
  // const [newMagazines, setNewMagazines] = useState([])

  const posts = useSelector(getAllPosts)

  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

  // useEffect(() => {
  //   const filtredMagazines = magazineItems.sort(
  //     (objA, objB) => Number(objA.date) - Number(objB.date),
  //   )

  //   setNewMagazines(filtredMagazines.slice(0, 4))
  // }, [])

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
            src={posts[i].thumbnail}
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
              <LinesEllipsis text={posts[i].heading} maxLine={downMd ? 3 : 5} />
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
      <Slider {...settings}>
        {posts.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <img
                src={slide.thumbnail}
                srcSet={slide.thumbnail}
                alt={slide.heading}
                style={{ height: '70vh' }}
              />

              <CardActionArea
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
                }}
              >
                <Box
                  component="div"
                  sx={{ textAlign: 'end', ml: 3, width: '80%' }}
                >
                  <Typography variant="h4" color="secondary" sx={{ mb: 2 }}>
                    {slide.heading}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ direction: 'ltr' }}
                    textAlign="start"
                    color="text.primary"
                  >
                    <LinesEllipsis
                      text={slide.introduction}
                      maxLine={downMd ? 3 : 5}
                    />
                  </Typography>
                </Box>
              </CardActionArea>
            </ImageListItem>
          </Box>
        ))}
      </Slider>

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
