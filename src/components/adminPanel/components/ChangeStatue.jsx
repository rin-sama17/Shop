import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { CustomIconButton } from '../../common'
import { GridActionsCellItem } from '@mui/x-data-grid'

const ChangeStatue = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      {show ? (
        <GridActionsCellItem
          icon={<VisibilityOff />}
          sx={{ color: 'btnNav.main' }}
          onClick={() => setShow(false)}
        />
      ) : (
        <GridActionsCellItem
          icon={<Visibility />}
          sx={{ color: 'success.main' }}
          onClick={() => setShow(true)}
        />
      )}
    </>
  )
}

export default ChangeStatue
