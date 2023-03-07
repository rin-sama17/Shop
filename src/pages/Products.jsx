import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { Box } from '@mui/material'

import { ProductsFilter, Product } from '../components/products'
import { CustomPagination, Spinner } from '../components/common'

import { useGetProductsQuery } from '../api'

const Products = () => {
  const [data, setData] = useState([])

  const { data: products = [], isSuccess, isLoading } = useGetProductsQuery()
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Grid container sx={{ width: 1, mt: 3 }}>
      <Grid xs={12} md={3} sx={{ m: 0 }}>
        {isSuccess && <ProductsFilter setData={setData} data={products} />}
      </Grid>
      <Grid xs={12} md={9}>
        <Grid container>
          {data.map((product, index) => (
            <Product productId={product.id} key={index} maxWidth={220} />
          ))}

          <Box
            sx={{
              width: 1,
              my: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CustomPagination setData={setData} data={products} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Products
