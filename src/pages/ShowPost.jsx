import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../api'
import { ShowPostLoading } from '../components/loading'
import { PostContents } from '../components/Posts'
const ShowPost = () => {
  const { postId } = useParams()
  const { data = { post: {} }, isLoading, isSuccess } = useGetPostQuery(postId)
  let content
  if (isLoading) {
    content = <ShowPostLoading />
  } else if (isSuccess) {
    content = <PostContents post={data.post} />
  }

  return content
}
export default ShowPost
