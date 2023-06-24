import { useSelector } from 'react-redux'
import { selectAuth } from '../../../reducers/authSlice'
import { Spinner } from '../../common'
import { EditUserInfo } from '../components'
const Dashboard = () => {
  const { userInfo, loading } = useSelector(selectAuth)

  return <>{loading ? <Spinner /> : <EditUserInfo userInfo={userInfo} />}</>
}

export default Dashboard
