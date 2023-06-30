import { Skeleton, Box } from '@mui/material'
import React from 'react'
import ProductLoading from './ProductLoading'
import Grid from '@mui/material/Unstable_Grid2'
const ProductsLoding = () => {
  return (
    <Box>
      <Box
        sx={{
          height: { xs: 'auto', md: '100px' },
          display: { xs: 'block', md: 'flex' },
          direction: 'rtl',
        }}
      >
        <Skeleton sx={{ height: '60px', width: { xs: 1, md: '50%' }, mx: 1 }} />
        <Skeleton sx={{ height: '60px', width: { xs: 1, md: '25%' }, mx: 1 }} />
        <Skeleton sx={{ height: '60px', width: { xs: 1, md: '25%' }, mx: 1 }} />
      </Box>
      <Grid container sx={{ width: 1 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={item}>
            <ProductLoading />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductsLoding
