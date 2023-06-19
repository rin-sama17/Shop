import { Box, Typography } from '@mui/material'
import { createSelector } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useGetPostsQuery } from '../api'
import { CustomNoRowsOverlay } from '../components/adminPanel/components'
import { Post } from '../components/Posts'

const AuthorPage = () => {
  const { userId } = useParams()
  const { t } = useTranslation()

  const selectAuthorPosts = useMemo(() => {
    const emptyArray = []

    return createSelector(
      (res) => res.data?.posts,
      (res, user) => user,
      (data, user) =>
        data?.filter((post) => post.user_id == user) ?? emptyArray,
    )
  }, [])

  const { authorPosts, isSuccess } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      authorPosts: selectAuthorPosts(result, userId),
    }),
  })
  if (!isSuccess) {
    return
  }
  return (
    <Box sx={{ width: 1, mt: 5, minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 1,
          mt: 3,
          mb: 6,
        }}
      >
        <Typography variant="h5" color="secondary">
          {t('تمام پست های ')} "{userId}"
        </Typography>
      </Box>
      {authorPosts.length > 0 ? (
        authorPosts.map((post, index) => <Post postId={post.id} key={index} />)
      ) : (
        <CustomNoRowsOverlay />
      )}
    </Box>
  )
}

export default AuthorPage
