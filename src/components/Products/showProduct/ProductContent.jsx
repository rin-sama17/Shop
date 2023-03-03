import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography } from '@mui/material'
import { ProductHeader, ProductDetails, ProductComments } from '.'
import { ShowCategory } from '../../common'

const ProductContent = ({ product }) => {
  return (
    <Grid container sx={{ width: 1, p: 5 }}>
      <ProductHeader product={product} />
      <Grid xs={12} md={4}>
        <ShowCategory category={product.category} tags={product.tags} />
      </Grid>

      <ProductDetails product={product} />
      <Grid xs={12}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography color="text.secondary" variant="body1" sx={{ mr: 1 }}>
            توضیحات:
          </Typography>{' '}
          <Typography color="text.primary" variant="body1" sx={{ mr: 1 }}>
            {product.details}
          </Typography>
        </Box>
        <ProductComments productId={product.id} />
      </Grid>
    </Grid>
  )
}

export default ProductContent
