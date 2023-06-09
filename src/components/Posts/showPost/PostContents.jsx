import { Container } from '@mui/material'
import PostIntroduction from './postIntroduction'
import { TextEditor } from '../../common'
const PostContent = ({ post }) => {
  console.log(post)
  return (
    <Container maxWidth="md">
      <PostIntroduction post={post} />
      <TextEditor readOnly value={post.description} />
    </Container>
  )
}

export default PostContent
