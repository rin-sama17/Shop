import { EditDescription } from '../components'
import { useGetDescriptionQuery } from '../../../api'
import { Spinner } from '../../common'

const DescriptionManagement = () => {
  const { data: description, isLoading, isSuccess } = useGetDescriptionQuery()
  let content
  if (isLoading) {
    content = <Spinner />
  } else if (isSuccess) {
    content = <EditDescription description={description} />
  }
  return content
}

export default DescriptionManagement
