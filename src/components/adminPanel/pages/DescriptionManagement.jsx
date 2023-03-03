import { Typography } from '@mui/material'

import { EditDescription } from '../components'
import { useGetDescriptionQuery } from '../../../api'

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
