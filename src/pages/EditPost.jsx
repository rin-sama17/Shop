import { Box, Typography } from '@mui/material'
import { useGetPostQuery } from '../api'
import { useParams } from 'react-router-dom'
import EditPostFields from './EditPostFields'

const EditPost = () => {
  const { postId } = useParams()
  const { data: post, isLoading, isSuccess } = useGetPostQuery(postId)

  let content
  if (isLoading) {
    content = <Typography>بارگذاری</Typography>
  } else if (isSuccess) {
    content = <EditPostFields post={post} />
  }
  return (
    <Box
      sx={{
        width: 1,
        px: 3,
        py: 3,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      {content}
    </Box>
  )
}

export default EditPost
