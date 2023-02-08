import Grid from '@mui/material/Unstable_Grid2'
import { useState, useMemo, useContext } from 'react'
import { Pagination, Box } from '@mui/material'

import MainContext from '../context'
// import { productsData } from '../constants/products'
import { ProductsFilter, Product } from '../components/Products'
import { CustomPagination } from '../components/common'

import { useSelector } from 'react-redux'
import { getAllProduct } from '../reducers/productSlice'

const Products = () => {
  const [data, setData] = useState([])

  const products = useSelector(getAllProduct)

  return (
    <Grid container sx={{ width: 1 }}>
      <Grid xs={12} md={3} sx={{ m: 0 }}>
        <ProductsFilter />
      </Grid>
      <Grid xs={12} md={9}>
        <Grid container>
          {data.map((product, index) => (
            <Product
              product={product}
              key={index}
              sm={6}
              md={4}
              lg={3}
              maxWidth={220}
            />
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
