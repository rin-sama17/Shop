import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { Box } from '@mui/material'

import { ProductsFilter, Product } from '../components/products'
import { CustomMassage, CustomPagination, Spinner } from '../components/common'

import { useGetProductsQuery } from '../api'
import { ProductLoading } from '../components/loading'

const Products = () => {
  const [data, setData] = useState([])
  const { data: products = { data: [] }, isSuccess } = useGetProductsQuery()

  if (!isSuccess) {
    return <ProductLoading />
  }
  return (
    <Box sx={{ mt: 3 }}>
      <ProductsFilter setData={setData} data={products.data} />
      <Grid container spacing={2} sx={{ width: 1 }}>
        {data.map((product, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} sx={{ justifyContent: 'center' }}>
            <Product productId={product.id} key={index} maxWidth={220} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          width: 1,
          my: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomPagination setData={setData} data={products.data} />
      </Box>
    </Box>
  )
}
export default Products
