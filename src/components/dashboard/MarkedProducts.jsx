import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { Box } from '@mui/material'

import { Product } from '../products'
import { CustomPagination } from '../common'
import { getAllProduct } from '../../reducers/productSlice'
import { useSelector } from 'react-redux'
const MarkedProducts = () => {
  const [data, setData] = useState([])

  const products = useSelector(getAllProduct)
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
