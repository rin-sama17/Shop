import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'

import { Post } from '../components/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectAllPosts } from '../reducers/postSlice'

const Posts = () => {
  const myPosts = useSelector(selectAllPosts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  console.log(myPosts)
  return myPosts.map((post, index) => <Post post={post} key={index} />)
}
export default Posts
