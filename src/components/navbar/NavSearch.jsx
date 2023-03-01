import { Search } from '@mui/icons-material'
import { IconButton, Badge, Box, useMediaQuery } from '@mui/material'

import SearchField from '../common/SearchField'

const NavSearch = ({ downLg, setSearchBox }) => {
  return (
    <>
      {downLg ? (
        <IconButton onClick={() => setSearchBox(true)}>
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
