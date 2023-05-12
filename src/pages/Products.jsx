import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { Box } from '@mui/material'

import { ProductsFilter, Product } from '../components/products'
import { CustomMassage, CustomPagination, Spinner } from '../components/common'

import { useGetProductsQuery } from '../api'

const Products = () => {
  const [data, setData] = useState([])

  const { data: products = [], isSuccess, isLoading } = useGetProductsQuery()
  if (isLoading) {
    return <Spinner />
  } else if (isSuccess && products.length === 0) {
    return (
      <CustomMassage
        text="هیچ پستی برای نمایش وجود ندارد"
        btnLabel="برگشتن به خانه"
        to="/"
      />
    )
  }
  return (
    <Box sx={{ width: 1, mt: 3 }}>
      {isSuccess && <ProductsFilter setData={setData} data={products} />}
      <Grid container>
        {data.map((product, index) => (
          <Grid xs={12} sm={6} md={4} lg={4} sx={{ justifyContent: 'center' }}>
            <Product productId={product.id} key={index} maxWidth={220} />
          </Grid>
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
    </Box>
  )
}
export default Products
