import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import { Box } from '@mui/material'

import { ProductsFilter, Product } from '../components/products'

import { ProductsLoding } from '../components/loading'
import CustomNoRowsOverlay from '../components/adminPanel/components/CustomNoRowsOverlay'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchFilterProduct,
  selectFiltredProducts,
} from '../reducers/filterProductsSlice'

const Products = () => {
  const { sortedProducts, isSuccess } = useSelector(selectFiltredProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFilterProduct())
  }, [])

  if (!isSuccess) {
    return <ProductsLoding />
  }

  return (
    <Box sx={{ mt: 5 }}>
      <ProductsFilter />
      {sortedProducts && sortedProducts.length > 0 ? (
        <Grid container spacing={2} sx={{ width: 1 }}>
          {sortedProducts.map((product, index) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ justifyContent: 'center' }}
              key={index}
            >
              <Product productId={product.id} maxWidth={220} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CustomNoRowsOverlay />
      )}
    </Box>
  )
}
export default Products
