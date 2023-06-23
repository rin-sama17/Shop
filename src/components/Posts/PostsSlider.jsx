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
import { useGetPostsQuery } from '../../api'

const PostsSlider = () => {
  const { data = { posts: [] }, isSuccess } = useGetPostsQuery()
  const posts = data.posts.filter((post) => post.status === 1)
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))

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
            src={`http://localhost:8000/${posts[i].image}`}
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
              <LinesEllipsis text={posts[i].name} maxLine={1} />
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
    <Box sx={{ width: 1, mb: 2 }}>
      <Slider {...settings}>
        {posts.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <img
                src={`http://localhost:8000/${slide.image}`}
                alt={slide.name}
                style={{
                  height: downMd ? '35vh' : '40vh',
                  borderRadius: '0 0 20px 20px',
                }}
              />

              <CardActionArea
                component={Link}
                to={`/posts/${slide.id}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignContent: 'flex-end',
                  flexWrap: 'wrap',
                  position: 'absolute',
                  bottom: 0,
                  bgcolor: 'bgBlur.main',
                  width: 1,
                  height: 1,
                  borderRadius: '0 0 20px 20px',
                  px: 1,
                }}
              >
                <Grid
                  // component={Grid}
                  container
                  spacing={2}
                  // direction="row"
                  // divider={<Divider orientation="vertical" flexItem />}
                  sx={{
                    width: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    pt: 3,
                  }}
                >
                  <Grid
                    xs={4.5}
                    md={3}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Paper elevation={12} sx={{ borderRadius: 7 }}>
                      <CardMedia
                        component="img"
                        image={`http://localhost:8000/${slide.image}`}
                        alt={slide.name}
                        sx={{
                          width: downMd ? 150 : 250,
                          height: downMd ? 100 : 200,
                          borderRadius: 7,
                        }}
                      />
                    </Paper>
                  </Grid>
                  <Grid xs={6.5} md={8} sx={{ textAlign: 'end' }}>
                    <Typography
                      variant={downMd ? 'subtitle2' : 'h6'}
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
