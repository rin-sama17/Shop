import { Typography, Box } from '@mui/material'
import { ShowCategory } from '../../common'

const PostParagraphs = ({ post }) => {
  return (
    <>
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
    </>
  )
}

export default PostParagraphs
