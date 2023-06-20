import { Post, PostsSlider } from '../components/posts'
import { useGetPostsQuery } from '../api'
import { PostLoading } from '../components/loading'
import { CustomNoRowsOverlay } from '../components/adminPanel/components'
import { Box } from '@mui/material'

const Posts = () => {
  const { data = { posts: [] }, isSuccess } = useGetPostsQuery()
  const posts = data.posts.filter((post) => post.status === 1)

  if (!isSuccess) {
    return <PostLoading />
  }

  if (data.posts.length === 0) {
    return (
      <Box sx={{ mt: 5 }}>
        <CustomNoRowsOverlay />
      </Box>
    )
  }
  return (
    <Box>
      {posts.length > 0 ? (
        <>
          <PostsSlider />
          {posts.map((post, index) => (
            <Post postId={post.id} key={index} />
          ))}
        </>
      ) : (
        <CustomNoRowsOverlay />
      )}
    </Box>
  )
}
export default Posts
