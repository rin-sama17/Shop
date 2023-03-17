import { Typography } from '@mui/material'
import { ShowCategory } from '../../common'

const PostIntroduction = ({ post }) => {
  return (
    <>
      <ShowCategory categoryId={post.category} tags={post.tags} />
      <Typography color="text.primary" variant="h6" sx={{ my: 2 }}>
        {post.heading}
      </Typography>
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.heading}
          style={{ width: '100%' }}
        />
      )}
      <Typography color="text.secondary" component="p" sx={{ my: 3 }}>
        {post.introduction}
      </Typography>
    </>
  )
}

export default PostIntroduction
