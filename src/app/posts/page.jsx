import Grid from '@mui/material/Unstable_Grid2'
import Post from '@/components/Post'
import { getProducts } from '@/api'

const Posts = async () => {
  const { data } = await getProducts()
  return (
    <Grid container>
      {data.map((post, index) => (
        <Post postId={post.id} key={index} />
      ))}
    </Grid>
  )
}
export default Posts
