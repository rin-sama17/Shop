import { Container, Slide, useScrollTrigger } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'

import { NavContent, NavDrawer } from './'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  function HideOnScroll(props) {
    const { children } = props

    const trigger = useScrollTrigger()

    return (
      <Slide
        appear={false}
        direction="down"
        in={!trigger}
        style={{ transitionDelay: trigger ? '0ms' : '300ms' }}
      >
        {children}
      </Slide>
    )
  }
  return (
    <>
      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <HideOnScroll>
        <Grid
          container
          sx={{
            width: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 20,
          }}
        >
          <NavContent setDrawerOpen={setDrawerOpen} />
        </Grid>
      </HideOnScroll>
    </>
  )
}
export default Navbar
