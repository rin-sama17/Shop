import { useTheme, useMediaQuery, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { CustomModal, SearchField } from '../common'
import { Search } from '@mui/icons-material'

const NavSearch = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!downMd) {
      setOpen(false)
    }
  }, [downMd])

  let content

  if (downMd) {
    content = (
      <>
        <IconButton sx={{ mx: 0.5 }} onClick={() => setOpen(true)}>
          <Search />
        </IconButton>
        <CustomModal open={open} setOpen={setOpen}>
          <SearchField downMd={downMd} setOpen={setOpen} />
        </CustomModal>
      </>
    )
  } else {
    content = <SearchField downMd={downMd} />
  }

  return content
}
export default NavSearch
