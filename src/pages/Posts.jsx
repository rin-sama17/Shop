import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { Box, Container } from '@mui/material'

import { PostsFilter, Post } from '../components/Posts'
import { CustomPagination } from '../components/common'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../reducers/postSlice'
import { useGetPostsQuery } from '../api'

const Posts = () => {
  const [data, setData] = useState([])
  const { data: posts = [] } = useGetPostsQuery()
  console.log(posts)
  console.log(data)
  return (
    <Container maxWidth="md">
      <Grid container>
        {data.map((post, index) => (
          <Post postId={post.id} key={index} />
        ))}
        <Box
          sx={{
            width: 1,
            my: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CustomPagination setData={setData} data={posts} />
        </Box>
      </Grid>
    </Container>
  )
}
export default Posts
