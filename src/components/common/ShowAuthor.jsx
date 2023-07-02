import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAuthorQuery } from '../../api'
import { useTranslation } from 'react-i18next'

const ShowAuthor = ({ userId }) => {
  const { data, isSuccess, isError } = useGetAuthorQuery(userId)
  const { t } = useTranslation()
  let content

  if (isError || !isSuccess) {
    content = (
      <Typography variant="caption" color="text.secondary">
        {t('نویسنده ناشناس')}
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
