import Grid from '@mui/material/Unstable_Grid2'
import ProductDetails from './ProductDetails'
import { ShowCategory } from '@/components/common'
const ProductContent = ({ product }) => {
  return (
    <Grid container spacing={2} sx={{ width: 1 }}>
      <Grid
        xs={12}
        md={4}
        sx={{ p: 1, display: 'flex', justifyContent: 'center' }}
      >
        <img className="zoom" src={product.thumbnail} alt={product.name} />
      </Grid>
      <Grid xs={12} md={4}>
        <ShowCategory categoryId={product.category} tags={product.tags} />
      </Grid>

      <ProductDetails product={product} />
    </Grid>
  )
}

export default ProductContent
