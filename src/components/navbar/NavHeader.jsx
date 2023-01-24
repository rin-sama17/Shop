import { Typography, IconButton, Box, useMediaQuery } from '@mui/material'

import { Menu } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { NavItems } from './'
const NavHeader = ({ setDrawerOpen }) => {
  const theme = useTheme()
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {isMdDown ? (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: 0.5,
          }}
        >
          <IconButton onClick={() => setDrawerOpen(true)}>
            <Menu />
          </IconButton>
          <Typography variant="body1" color="text.primary">
            فروشگاه من
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            ml: 1,
          }}
        >
          <Typography variant="body1" color="text.primary">
            فروشگاه من
          </Typography>
          <NavItems direction="row" width={100} />
        </Box>
      )}
    </>
  )
}
export default NavHeader
