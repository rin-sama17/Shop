import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'

import { NavContent, NavDrawer } from './'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <>
      <NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Container
        maxWidth="lg"
        sx={{
          py: 2,
          alignItems: 'center',
          bgcolor: 'bgcolor.dark',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <Grid
          container
          sx={{ width: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <NavContent setDrawerOpen={setDrawerOpen} />
        </Grid>
      </Container>
    </>
  )
}
export default Navbar
