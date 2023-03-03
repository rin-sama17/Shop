import { Container, Skeleton, Typography, Box } from '@mui/material'
import { Suspense } from 'react'
import { ShowCategory } from '../../common'

const ShowSinglePost = ({ post }) => {
  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
      <ShowCategory category={post.category} tags={post.tags} />
      <Typography color="text.primary" variant="h6" sx={{ my: 2 }}>
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
      <Typography color="text.secondary" component="p" sx={{ my: 3 }}>
        {post.introduction}
      </Typography>
      {post.paragraphs.map((item, index) => (
        <Box key={index} sx={{ my: 3 }}>
          <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
            {item.title}
          </Typography>
          <Box sx={{ px: 3 }}>
            {item.photo && (
              <img
                src={item.photo}
                alt={item.title}
                style={{ width: '100%', marginTop: '8px' }}
              />
            )}{' '}
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              {item.body}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  )
}

export default ShowSinglePost
