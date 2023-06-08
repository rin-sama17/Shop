import { useParams } from 'react-router-dom'
import { ShowPostLoading } from '../components/loading'
import { PostContents } from '../components/Posts'
const ShowPost = () => {
  const { postId } = useParams()

  return <>{postId}</>
}
export default ShowPost
