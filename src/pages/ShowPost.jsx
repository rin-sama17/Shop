import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../api/index.js'
import { ShowPostLoading } from '../components/loading'
import { PostContent } from '../components/Posts/index.js'
const ShowPost = () => {
  const { postId } = useParams()
  const { data: post, isLoading, isSuccess } = useGetPostQuery(postId)
  let content
  if (isLoading) {
    content = <ShowPostLoading />
  } else if (isSuccess) {
    content = <PostContent post={post} />
  }

  return content
}
export default ShowPost
