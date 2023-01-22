import { Typography, Divider, Box, SwipeableDrawer } from '@mui/material'

import { NavItems } from './'
const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
  }
  return (
    <SwipeableDrawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'block',
          lg: 'none',
          xl: 'none',
        },
        '& 	.MuiDrawer-paper': {
          width: 200,
        },
      }}
    >
      <Box
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
          bgcolor: 'background.main',
          p: 1,
        }}
      >
        <Typography
          color="text.primary"
          variant="h6"
          sx={{
            mt: 2,
          }}
        >
          فروشگاه من
        </Typography>

        <Divider variant="middle" sx={{ my: 2, bgcolor: 'scondary.main' }} />
        <NavItems direction="column" width={1} />
      </Box>
    </SwipeableDrawer>
  )
}
export default NavDrawer
