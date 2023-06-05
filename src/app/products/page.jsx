import Grid from '@mui/material/Unstable_Grid2'

import { getProducts } from '@/api'
import Product from '@/components/Product'

const Products = async () => {
  const { data } = await getProducts()
  return (
    <Grid container spacing={2} sx={{ width: 1 }}>
      {data.map((product, index) => (
        <Grid xs={12} sm={6} md={4} lg={3} sx={{ justifyContent: 'center' }}>
          <Product productId={product.id} key={index} maxWidth={220} />
        </Grid>
      ))}
    </Grid>
  )
}
export default Products
