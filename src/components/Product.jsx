import { Typography, CardMedia, Fade, Paper, Box } from '@mui/material'
import { getProduct, useGetProductQuery } from '@/api'
import { ProductPrice } from './common'
import Link from 'next/link'

const Product = async ({ productId }) => {
  const { product } = await getProduct(productId)
  return (
    <Fade sx={{ width: 250, m: 'auto' }}>
      <Box component={Link} href={`/products/${productId}`} sx={{ py: 1 }}>
        <Box sx={{ width: 1, mb: 2 }}>
          <Paper elevation={12} sx={{ width: 250, m: 'auto' }}>
            <CardMedia
              component="img"
              sx={{ height: 1, width: 250 }}
              alt={product.name}
              image={product.thumbnail}
            />
          </Paper>
        </Box>
        <Typography
          color="text.primary"
          variant="subtitle1"
          textAlign="left"
          gutterBottom
        >
          {product.name}
        </Typography>
        <Box sx={{ width: 1 }}>
          <ProductPrice
            price={product.price}
            discount={product.discount}
            absolute
          />
        </Box>
      </Box>
    </Fade>
  )
}
export default Product
