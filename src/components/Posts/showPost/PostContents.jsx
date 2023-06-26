import { Container } from '@mui/material'
import PostIntroduction from './postIntroduction'
import { TextEditor } from '../../common'
const PostContent = ({ post }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <PostIntroduction post={post} />
      <TextEditor readOnly value={post.description} />
    </Container>
  )
}

export default PostContent
