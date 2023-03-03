import Grid from '@mui/material/Unstable_Grid2'
import { Product } from '../products'

import { useGetProductsQuery } from '../../api'
const HomeNewProducts = () => {
  const { data: products = [] } = useGetProductsQuery()
  return (
    <Grid container sx={{ width: 1 }}>
      {products.slice(0, 12).map((product, index) => (
        <Product productId={product.id} key={index} maxWidth={240} />
      ))}
    </Grid>
  )
}
export default HomeNewProducts
