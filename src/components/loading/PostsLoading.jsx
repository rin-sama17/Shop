import { Skeleton, Box, CardContent, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import PostLoading from './PostLoading'

const PostsLoading = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,

          m: '10px auto',
        }}
      ></Box>
      <PostLoading />
    </>
  )
}

export default PostsLoading
