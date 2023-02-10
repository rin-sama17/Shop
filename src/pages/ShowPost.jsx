import ShowSinglePost from '../components/posts/showPost/ShowSinglePost.jsx'
import { useParams } from 'react-router-dom'
const ShowPost = () => {
  const { postId } = useParams()
  return <ShowSinglePost postId={postId} />
}
export default ShowPost
