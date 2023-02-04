// import { productsData } from '../../constants/products'
import Grid from '@mui/material/Unstable_Grid2'
import { Product } from '../Products'

import { useSelector } from 'react-redux'
import { getAllProduct } from '../../reducers/productSlice'
const HomeNewProducts = () => {
  const products = useSelector(getAllProduct)

  return (
    <Grid container sx={{ width: 1 }}>
      {products.slice(0, 12).map((product, index) => (
        <Product product={product} key={index} sm={6} md={3} maxWidth={240} />
      ))}
    </Grid>
  )
}
export default HomeNewProducts
