import Grid from '@mui/material/Unstable_Grid2'
import { useState, useMemo, useContext } from 'react'
import { Pagination, Box, Container } from '@mui/material'

import MainContext from '../../context'
// import { productsData } from '../constants/products'
import { Product } from '../Products'
import { CustomPagination } from '../common'
import { getAllProduct } from '../../reducers/productSlice'
import { useSelector } from 'react-redux'
const MarkedProducts = () => {
  const [data, setData] = useState([])

  const product = useSelector(getAllProduct)
  return (
    <Grid container>
      {data.map((product, index) => (
        <Product product={product} key={index} />
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
  )
}

export default MarkedProducts
