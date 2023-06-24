import {
  CardActionArea,
  Box,
  Typography,
  Paper,
  CardMedia,
} from '@mui/material'
import { ShowAuthor } from '../common'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import { useGetPostQuery } from '../../api'
import PostLoading from '../loading/PostLoading'

const Post = ({ postId }) => {
  const { data = { post: {} }, isSuccess, isError, error } = useGetPostQuery(
    postId,
  )
  console.log('error: ', isError, error)
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
      <Paper
        elevation={8}
        sx={{
          width: { xs: '300px', sm: 1 },
          borderRadius: '20px',
        }}
      >
        <CardActionArea component={Link} to={`/posts/${post.id}`}>
          <Box>
            <Grid container sx={{ justifyContent: 'space-between' }}>
              <Grid xs={12} sm={4}>
                <CardMedia
                  component="img"
                  alt={post.name}
                  image={`http://localhost:8000/${post.image}`}
                  style={{
                    margin: 'auto',
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                  }}
                />
              </Grid>
              <Grid xs={12} sm={8} sx={{ p: 2 }}>
                <Typography
                  color="secondary"
                  variant="subtitle1"
                  textAlign="left"
                >
                  {post.name}
                  <Box sx={{ display: 'flex' }}>
                    <ShowAuthor userId={post.user_id} />
                  </Box>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  <LinesEllipsis text={post.summary} maxLine={6} />
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardActionArea>
      </Paper>
    </Box>
  )
}
export default Post
