import { Skeleton, Box } from '@mui/material'
import React from 'react'
import ProductLoading from './ProductLoading'
import Grid from '@mui/material/Unstable_Grid2'
const ProductsLoding = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Grid container sx={{ width: 1, px: 2 }}>
        <Grid xs={12} md={4} lg={3}>
          <Box
            sx={{
              height: 'auto',
              direction: 'rtl',
            }}
          >
            <Skeleton sx={{ height: '60px', width: 1 }} />
            <Skeleton sx={{ height: '60px', width: 1 }} />
            <Skeleton sx={{ height: '60px', width: 1 }} />
          </Box>
        </Grid>
        <Grid xs={12} md={8} lg={9}>
          <Grid container sx={{ width: 1, mt: 2 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <Grid xs={6} sm={4} md={4} lg={3} key={item}>
                <ProductLoading />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductsLoding
