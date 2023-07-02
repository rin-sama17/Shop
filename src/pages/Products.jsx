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
      <Grid container sx={{ width: 1, px: 2 }}>
        <Grid xs={12} md={4} lg={3}>
          <ProductsFilter />
        </Grid>
        <Grid xs={12} md={8} lg={9}>
          {sortedProducts && sortedProducts.length > 0 ? (
            <Grid container sx={{ width: 1, mt: 2 }}>
              {sortedProducts.map((product, index) => (
                <Grid
                  xs={6}
                  sm={4}
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
        </Grid>
      </Grid>
    </Box>
  )
}
export default Products
