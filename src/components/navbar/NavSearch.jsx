import { Search } from '@mui/icons-material'
import { IconButton, Badge, Box, useMediaQuery } from '@mui/material'

import SearchField from '../common/SearchField'

const NavSearch = ({ downLg, showSearchBox, setSearchBox }) => {
  return (
    <>
      {downLg ? (
        <>
          <IconButton onClick={() => setSearchBox(true)}>
            <Search />
          </IconButton>
          {showSearchBox ? (
            <SearchField
              setSearchBox={setSearchBox}
              closeable
              sx={{
                width: 1,
                bgcolor: 'background.main',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          ) : null}
        </>
      ) : (
        <Box sx={{ width: 1, px: 2 }}>
          <SearchField setSearchBox={setSearchBox} small />
        </Box>
      )}
    </>
  )
}
export default NavSearch
