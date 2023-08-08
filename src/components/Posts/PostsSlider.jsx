import {
  Box,
  Card,
  Typography,
  ImageListItem,
  useMediaQuery,
  CardActionArea,
  Paper,
  CardMedia,
} from '@mui/material'
import { useTheme } from '@mui/styles'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import Slider from 'react-slick'
import Grid from '@mui/material/Unstable_Grid2'
import { useGetPostsQuery } from '../../api'
import { SliderLoading } from '../loading'

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
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 4,
          }}
        >
          <img
            src={`https://api.labkhand-carpet.ir/${posts[i].image}`}
            alt=""
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
              direction: 'ltr',
              mx: 1,
            }}
          >
            <LinesEllipsis text={posts[i].name} maxLine={1} />
          </Typography>
        </Card>
      )
    },
    dotsClass: 'slick-thumb slick-dots',
    rtl: true,
  }

  if (!isSuccess) {
    return <SliderLoading />
  }

  return (
    <Box sx={{ width: '90%', mb: 3, mx: 'auto' }}>
      <Slider {...settings}>
        {posts.slice(0, 4).map((slide, index) => (
          <Box component="div" key={index}>
            <ImageListItem>
              <CardMedia
                component="img"
                image={`https://api.labkhand-carpet.ir/${slide.image}`}
                alt={slide.name}
                sx={{
                  height: { xs: '20vh', sm: '30vh', md: '45vh' },
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
                  container
                  spacing={2}
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
                    <Paper
                      elevation={12}
                      sx={{
                        borderRadius: 7,
                        width: { xs: 100, sm: 150, md: 200 },
                        height: { xs: 50, sm: 100, md: 150 },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={`https://api.labkhand-carpet.ir/${slide.image}`}
                        alt={slide.name}
                        sx={{
                          width: { xs: 100, sm: 150, md: 200 },
                          height: { xs: 50, sm: 100, md: 150 },
                          borderRadius: '10%',
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
                        text={slide.summary}
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
