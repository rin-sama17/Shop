import { Box, Typography } from '@mui/material'
import { ShowCategory, ShowTime, ShowAuthor } from '../../common'

const PostIntroduction = ({ post }) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <ShowAuthor userId={post.user_id} />
      </Box>
      <Typography color="text.primary" variant="h6" sx={{ my: 2 }}>
        {post.name}
      </Typography>
      <img
        alt={post.name}
        src={`http://localhost:8000/${post.image}`}
        style={{ margin: 'auto', width: '100%' }}
      />
      <Typography color="text.secondary" component="p" sx={{ my: 3 }}>
        {post.summary}
      </Typography>
    </>
  )
}

export default PostIntroduction
