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
import { useTheme } from '@mui/material/styles'
import { Link, Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import Slider from 'react-slick'
import { useGetPostsQuery } from '../../api'
import Grid from '@mui/material/Unstable_Grid2'
const HomePostsSlider = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

  const { data: posts = [], isLoading } = useGetPostsQuery()

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
              <LinesEllipsis text={posts[i].heading} maxLine={1} />
            </Typography>
          )}
        </Card>
      )
    },
    dotsClass: 'slick-thumb slick-dots',
    rtl: true,
  }

  if (isLoading) {
    return <Skeleton width="100%" height="90vh" />
  }

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
                src={slide.thumbnail}
                srcSet={slide.thumbnail}
                alt={slide.heading}
                style={{ height: '60vh' }}
              />

              <CardActionArea
                component={Link}
                to={`/posts/${slide.id}`}
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
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Paper elevation={12} sx={{ p: 0.3 }}>
                      <img
                        src={slide.thumbnail}
                        srcSet={slide.thumbnail}
                        alt={slide.heading}
                        style={{ width: '100%' }}
                      />
                    </Paper>
                  </Grid>
                  <Grid xs={12} md={8} sx={{ textAlign: 'end' }}>
                    <Typography variant="h5" color="white" sx={{ mb: 2 }}>
                      {slide.heading}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ direction: 'ltr' }}
                      textAlign="start"
                      color="whitesmoke"
                    >
                      <LinesEllipsis
                        text={slide.introduction}
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
export default HomePostsSlider
