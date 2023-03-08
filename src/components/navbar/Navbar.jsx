import { AppBar, useScrollTrigger } from '@mui/material'
import { cloneElement, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import { NavContent, NavDrawer } from './'

import { useTheme } from '@mui/material/styles'
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const location = useLocation().pathname
  function ElevationScroll(props) {
    const { children } = props

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    })

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,

      style: {
        backgroundColor:
          location === '/'
            ? trigger
              ? theme.palette.bgBlur.main
              : 'rgba(0,0,0,0)'
            : theme.palette.bgBlur.main,
        backdropFilter: trigger ? 'blur(10px)' : 'blur(0px)',
      },
    })
  }
  return (
    <>
      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <ElevationScroll>
        <AppBar
          sx={{ py: 1 }}
          position={location === '/' ? undefined : 'sticky'}
        >
          <Grid container sx={{ width: 1 }}>
            <NavContent setDrawerOpen={setDrawerOpen} />
          </Grid>
        </AppBar>
      </ElevationScroll>
    </>
  )
}
export default Navbar
