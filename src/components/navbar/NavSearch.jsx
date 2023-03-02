import { Search } from '@mui/icons-material'
import { IconButton, Box } from '@mui/material'

import SearchField from '../common/SearchField'

const NavSearch = ({ downLg, setDrawerOpen }) => {
  return (
    <>
      {downLg ? (
        <IconButton onClick={() => setDrawerOpen(true)}>
          <Search />
        </IconButton>
      ) : (
        <Box sx={{ width: 1, px: 2 }}>
          <SearchField />
        </Box>
      )}
    </>
  )
}
export default NavSearch
