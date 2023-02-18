import { IconButton, Badge, Box, useMediaQuery } from '@mui/material'

import { ShoppingCart, Search } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { NavHeader, NavAvatar, NavSearch } from './'

import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartProducts } from '../../reducers/cartSlice'
const NavContent = ({ setDrawerOpen }) => {
  const theme = useTheme()
  const downLg = useMediaQuery(theme.breakpoints.down('lg'))
  const [showSearchBox, setSearchBox] = useState(false)
  const cartProducts = useSelector(selectCartProducts)

  useEffect(() => {
    if (!downLg) {
      setSearchBox(false)
      setDrawerOpen(false)
    }
  }, [downLg])

  return (
    <>
      <Grid xs={6} sm={3} md={10} lg={7} sx={{ display: 'flex' }}>
        <NavHeader
          setDrawerOpen={setDrawerOpen}
          sx={{ display: 'flex', alignItems: 'center', ml: 1 }}
        />
      </Grid>
      <Grid
        xs={6}
        sm={9}
        md={2}
        lg={5}
        sx={{
          display: 'flex',
          justifyContent: downLg ? 'flex-end' : 'space-between',
          alignItems: 'center',
        }}
      >
        <NavSearch
          downLg={downLg}
          setSearchBox={setSearchBox}
          showSearchBox={showSearchBox}
        />
        <Box
          sx={{
            display: showSearchBox ? 'none' : 'flex',
            alignItems: 'center',
            mr: 1,
          }}
        >
          <NavAvatar />

          <IconButton
            component={RouterLink}
            to="/cart"
            size="large"
            color="text.primary"
          >
            {' '}
            {cartProducts.length > 0 ? (
              <Badge badgeContent={cartProducts.length} color="secondary">
                <ShoppingCart />
              </Badge>
            ) : (
              <ShoppingCart />
            )}
          </IconButton>
        </Box>
      </Grid>
    </>
  )
}
export default NavContent
