import { useEffect, useMemo, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { CustomIconButton } from '../../common'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useDispatch } from 'react-redux'

const ChangeStatus = ({ item, editItem, havTag }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (item.status === 1) {
      setShow(true)
    }
  }, [])

  const handleClick = () => {
    let value
    if (havTag) {
      const tagIds = item.tags.map((tag) => tag.id)
      value = { ...item, tags: tagIds }
    } else {
      value = { ...item }
    }
    if (show) {
      setShow(false)
      dispatch(editItem({ values: { ...value, status: 0 } }))
    } else {
      setShow(true)
      dispatch(editItem({ values: { ...value, status: 1 } }))
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
