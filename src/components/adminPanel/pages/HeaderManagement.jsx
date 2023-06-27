import { AddHeader, EditHeader } from '../components'
import { useSelector } from 'react-redux'
import { selectHeaderPhoto } from '../../../reducers/sliderSlice'
import { useMemo } from 'react'
const HeaderManagement = () => {
  const header = useSelector(selectHeaderPhoto)
  const content = useMemo(() => {
    if (header) {
      return <EditHeader header={header} />
    } else {
      return <AddHeader />
    }
  }, [header])
  return content
}

export default HeaderManagement
