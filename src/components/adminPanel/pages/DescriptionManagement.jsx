import { Typography } from '@mui/material'
import { useGetDescriptionQuery } from '../../../api'
import EditDescription from './EditDescription'

const DescriptionManagement = () => {
  const { data: description, isLoading, isSuccess } = useGetDescriptionQuery()
  let content
  if (isLoading) {
    content = <Typography>بارگذاری</Typography>
  } else if (isSuccess) {
    content = <EditDescription description={description} />
  }
  return content
}

export default DescriptionManagement
