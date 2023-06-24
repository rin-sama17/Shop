import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAuthorQuery } from '../../api'

const ShowAuthor = ({ userId }) => {
  const { data, isSuccess, isError } = useGetAuthorQuery(userId)

  let content

  if (isError || !isSuccess) {
    content = (
      <Typography variant="caption" color="text.secondary">
        نویسنده ناشناس
      </Typography>
    )
  } else {
    content = (
      <Typography
        variant="caption"
        color="secondary"
        component={Link}
        to={`/author/${userId}`}
      >
        {data.name}
      </Typography>
    )
  }
  return <Box>{content}</Box>
}

export default ShowAuthor
