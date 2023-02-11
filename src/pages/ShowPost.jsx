import ShowSinglePost from '../components/posts/showPost/ShowSinglePost.jsx'
import { useParams } from 'react-router-dom'
import { useGetPostQuery } from '../api/index.js'
import ShowPostLoading from '../components/loading/ShowPostLoading.jsx'
const ShowPost = () => {
  const { postId } = useParams()
  const { data: post, isLoading, isSuccess } = useGetPostQuery(postId)
  let content
  if (isLoading) {
    content = <ShowPostLoading />
  } else if (isSuccess) {
    content = <ShowSinglePost post={post} />
  }

  return <>{content}</>
}
export default ShowPost
