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
  CardMedia,
} from '@mui/material'
import { useTheme } from '@mui/styles'
import { Link, Link as RouterLink } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import Slider from 'react-slick'
import Grid from '@mui/material/Unstable_Grid2'
import { category01, category02, category03 } from '../../assets'
import { useGetPostsQuery } from '../../api'

const PostsSlider = () => {
  const { data = { posts: [] }, isSuccess } = useGetPostsQuery()
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

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
            borderRadius: 4,
          }}
        >
          <img
            src={`http://localhost:8000/${data.posts[i].image}`}
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
              <LinesEllipsis text={data.posts[i].name} maxLine={1} />
            </Typography>
          )}
        </Card>
      )
    },
    dotsClass: 'slick-thumb slick-dots',
    rtl: true,
  }

  if (!isSuccess) {
    return <Skeleton width="100%" height="90vh" />
  }

  return (
    <Box sx={{ mb: 1, width: 1, my: 2 }}>
      <Slider {...settings}>
        {data.posts.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <img
                src={`http://localhost:8000/${slide.image}`}
                alt={slide.name}
                style={{ height: '60vh', borderRadius: '20px' }}
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
                  borderRadius: '20px',
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
                    <Paper elevation={12} sx={{ borderRadius: 7 }}>
                      <CardMedia
                        component="img"
                        image={`http://localhost:8000/${slide.image}`}
                        alt={slide.name}
                        sx={{
                          width: 300,
                          height: 200,
                          borderRadius: 7,
                        }}
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
    </Box>
  )
}
export default PostsSlider
