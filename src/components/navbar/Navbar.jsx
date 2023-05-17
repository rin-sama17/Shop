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
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  }
  return (
    <>
      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <HideOnScroll>
        <Container
          maxWidth="lg"
          sx={{
            py: 2,
            position: 'sticky',
            top: 0,
            zIndex: 2,
            alignItems: 'center',
            bgcolor: 'bgcolor.dark',
            borderRadius: {
              xs: 'none',
              md: '0 0 20px  20px ',
            },
          }}
        >
          <Grid
            container
            sx={{ width: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <NavContent setDrawerOpen={setDrawerOpen} />
          </Grid>
        </Container>
      </HideOnScroll>
    </>
  )
}
export default Navbar
