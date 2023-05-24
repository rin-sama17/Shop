import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { Box, Container } from '@mui/material'

import { Post } from '../components/Posts'
import { CustomPagination } from '../components/common'
import { useGetPostsQuery } from '../api'

const Posts = () => {
  const [data, setData] = useState([])
  const { data: posts = [] } = useGetPostsQuery()
  return (
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
  )
}
export default Posts
