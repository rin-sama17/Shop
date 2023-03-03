import { Container } from '@mui/material'
import PostIntroduction from './postIntroduction'
import PostParagraphs from './PostParagraphs'

const PostContent = ({ post }) => {
  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
      <PostIntroduction post={post} />
      <PostParagraphs post={post} />
    </Container>
  )
}

export default PostContent
