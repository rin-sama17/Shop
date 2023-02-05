import { Box, Skeleton } from '@mui/material'
import { Suspense } from 'react'
import { ProductModal } from './'
const ProductImages = ({ product }) => {
  return (
    <>
      {' '}
      <Box sx={{ mb: 1, width: 1 }}>
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
      <ProductModal product={product} />
    </>
  )
}

export default ProductImages
