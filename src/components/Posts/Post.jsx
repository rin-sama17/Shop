import {
  CardActionArea,
  Box,
  CardContent,
  Typography,
  Paper,
} from '@mui/material'
import { ShowTime } from '../common'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { useGetPostQuery } from '../../api'
import PostLoading from '../loading/PostLoading'

const Post = ({ postId }) => {
  const { data = { post: {} }, isSuccess } = useGetPostQuery(postId)
  const post = data.post
  if (!isSuccess) {
    return <PostLoading />
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 3,
        width: '80%',
        m: '10px auto',
      }}
    >
      <Paper elevation={8} sx={{ width: 1 }}>
        <CardActionArea component={Link} to={`/posts/${post.id}`}>
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
                    alt={post.name}
                    src={`http://localhost:8000/${post.image}`}
                    style={{ margin: 'auto', width: '100%' }}
                  />
                </Grid>
                <Grid xs={12} sm={8}>
                  <Typography
                    color="secondary"
                    variant="subtitle1"
                    textAlign="left"
                  >
                    {post.name}
                    <ShowTime timestamp={post.created_at} />
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    <LinesEllipsis text={post.summary} maxLine={6} />
                  </Typography>{' '}
                </Grid>
              </Grid>
            </CardContent>{' '}
          </Box>
        </CardActionArea>
      </Paper>
    </Box>
  )
}
export default Post
