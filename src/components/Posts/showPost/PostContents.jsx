import { Container } from '@mui/material'
import PostIntroduction from './postIntroduction'
import { TextEditor } from '../../common'
const PostContent = ({ post }) => {
  return (
    <Container maxWidth="md">
      <PostIntroduction post={post} />
      <TextEditor readOnly value={post.paragraphs} />
    </Container>
  )
}

export default PostContent
