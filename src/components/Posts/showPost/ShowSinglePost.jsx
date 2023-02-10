import { Container, Skeleton, Typography, Box } from '@mui/material'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from '../../../reducers/postSlice'
import { ShowCategory } from '../../common'

const ShowSinglePost = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId))
  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
      <ShowCategory category={post.category} tags={post.tags} />
      <Typography color="text.primary" variant="h4" sx={{ my: 2 }}>
        {post.heading}
      </Typography>
      <Suspense
        fallback={
          <Skeleton
            height="300px"
            width="100%"
            animation="pulse"
            variant="rectangular"
          />
        }
      >
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.heading}
            style={{ width: '100%' }}
          />
        )}
      </Suspense>
      <Typography color="text.secondary" variant="body1" sx={{ mb: 3 }}>
        {post.introduction}
      </Typography>
      {post.paragraphs.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h5" color="text.primary">
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {item.body}
          </Typography>
          {item.photo && (
            <img
              src={item.photo}
              alt={item.title}
              style={{ width: '100%', marginTop: '8px' }}
            />
          )}
        </Box>
      ))}
      {/* <Comments /> */}
    </Container>
  )
}

export default ShowSinglePost
