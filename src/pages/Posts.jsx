import Grid from '@mui/material/Unstable_Grid2'
import { useState, useMemo, useContext } from 'react'
import { Pagination, Box, Container } from '@mui/material'

import MainContext from '../context'
import { PostsFilter, Post } from '../components/Posts'
import { CustomPagination } from '../components/common'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../reducers/postSlice'

const Posts = () => {
  const [data, setData] = useState([])
  const posts = useSelector(selectAllPosts)

  return (
    <Container maxWidth="md">
      <Grid container>
        {data.map((post, index) => (
          <Post post={post} key={index} />
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
