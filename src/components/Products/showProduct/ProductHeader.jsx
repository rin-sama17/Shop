import { Box, Skeleton, Typography } from '@mui/material'
import { Suspense } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

const ProductHeader = ({ product }) => {
  return (
    <Grid xs={12} md={4} sx={{ p: 1, minHeight: '50vh' }}>
      <Box sx={{ width: 1 }}>
        <Suspense
          fallback={
            <Skeleton
              height="300px"
              width="100%"
              animation="pulse"
              variant="rectangular"
            />
          }
        >
          {' '}
          <img src={product.thumbnail} alt="" style={{ width: '100%' }} />
        </Suspense>
      </Box>
    </Grid>
  )
}

export default ProductHeader
