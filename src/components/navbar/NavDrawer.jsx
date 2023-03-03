import { Typography, Divider, Box, SwipeableDrawer } from '@mui/material'
import { SearchField } from '../common'
import { DrawerContent } from '../drawer'

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
      }}
    >
      <DrawerContent />
    </SwipeableDrawer>
  )
}
export default NavDrawer
