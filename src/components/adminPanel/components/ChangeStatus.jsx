import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'

const ChangeStatus = ({ item, editItem }) => {
  const [show, setShow] = useState(false)
  const lang = useSelector(selectLang)
  const dispatch = useDispatch()
  useEffect(() => {
    if (item.status === 1) {
      setShow(true)
    }
  }, [])

  const handleClick = () => {
    let value
    if (item.tags) {
      const tagIds = item.tags?.map((tag) => tag.id) ?? []
      if (item.discount === null) {
        value = { ...item, lang, tags: tagIds, discount: 0 }
      } else {
        value = { ...item, lang, tags: tagIds }
      }
    } else {
      value = { ...item, lang }
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
