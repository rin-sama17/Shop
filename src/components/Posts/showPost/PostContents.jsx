import { Container } from '@mui/material'
import PostIntroduction from './postIntroduction'
import PostParagraphs from './PostParagraphs'
import { TextEditor } from '../../common'
const PostContent = ({ post }) => {
  const body = JSON.parse(post.paragraphs)
  return (
    <Container maxWidth="md">
      <PostIntroduction post={post} />
      <TextEditor readOnly value={body} />
    </Container>
  )
}

export default PostContent
