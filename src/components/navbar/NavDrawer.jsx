import { SwipeableDrawer } from '@mui/material'
import { DrawerContent } from '../drawer'

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const lang = localStorage.getItem('lang')

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
      anchor={lang === 'en' ? 'left' : 'right'}
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        direction: lang === 'en' ? 'ltr' : 'rtl',
        '& 	.MuiDrawer-paper': {
          width: 300,
        },
      }}
    >
      <DrawerContent setOpen={setDrawerOpen} />
    </SwipeableDrawer>
  )
}
export default NavDrawer
