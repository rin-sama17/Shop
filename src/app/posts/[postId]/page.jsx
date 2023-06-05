import { getPost } from '@/api'
import PostContents from './PostContents'
const ShowPost = async ({ params: { postId } }) => {
  const { post } = await getPost(postId)

  return <PostContents post={post} />
}
export default ShowPost
