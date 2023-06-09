import Grid from '@mui/material/Unstable_Grid2'
import { ProductDetails } from '.'
import { ShowCategory } from '../../common'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { ArrowLeft } from '@mui/icons-material'
import { c11 } from '../../../assets'
const ProductContent = ({ product }) => {
  return (
    <Grid container spacing={2} sx={{ width: 1 }}>
      <Grid
        xs={12}
        md={4}
        sx={{ p: 1, mt: 2, display: 'flex', justifyContent: 'center' }}
      >
        <img
          className="zoom"
          src={`http://localhost:8000/${product.image}`}
          alt={product.name}
        />
      </Grid>
      <Grid xs={12} md={4}>
        <ShowCategory categoryId={product.category_id} tags={product.tags} />
      </Grid>

      <ProductDetails product={product} />
    </Grid>
  )
}

export default ProductContent
