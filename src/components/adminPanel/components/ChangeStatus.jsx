import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { CustomIconButton } from '../../common'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useDispatch } from 'react-redux'

const ChangeStatus = ({ item, editItem }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (item.status === 1) {
      setShow(true)
    }
  }, [])

  const handleClick = () => {
    console.log(show)
    if (show) {
      setShow(false)
      dispatch(editItem({ values: { ...item, status: 0 } }))
    } else {
      setShow(true)
      dispatch(editItem({ values: { ...item, status: 1 } }))
    }
  }

  return (
    <>
      {show ? (
        <GridActionsCellItem
          icon={<VisibilityOff />}
          sx={{ color: 'btnNav.main' }}
          onClick={handleClick}
        />
      ) : (
        <GridActionsCellItem
          icon={<Visibility />}
          sx={{ color: 'success.main' }}
          onClick={handleClick}
        />
      )}
    </>
  )
}

export default ChangeStatus
