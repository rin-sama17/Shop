import {
  CardActionArea,
  Box,
  CardContent,
  Typography,
  Paper,
  Fade,
} from '@mui/material'
import { ShowTime } from './common'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { getPost } from '../api'

const Post = async ({ postId }) => {
  const { post } = await getPost(postId)

  return (
    <Fade>
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
          <CardActionArea component={Link} to={`/post/read/${post.id}`}>
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
                      alt={post.heading}
                      src={post.thumbnail}
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
                      {post.heading}
                      <ShowTime timestamp={post.date} />
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      gutterBotton
                    >
                      <LinesEllipsis text={post.introduction} maxLine={6} />
                    </Typography>{' '}
                  </Grid>
                </Grid>
              </CardContent>{' '}
            </Box>
          </CardActionArea>
        </Paper>
      </Box>
    </Fade>
  )
}
export default Post
