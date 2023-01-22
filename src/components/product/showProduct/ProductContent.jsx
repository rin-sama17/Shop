import { useState, useContext } from 'react'
import MainContext from '../../../context'

import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography } from '@mui/material'
import {
  ProductImages,
  ProductModal,
  ProductDetails,
  ProductComments,
  ProductIcons,
} from '.'
import { CustomLoading } from '../../common'

const ProductContent = () => {
  const [open, setOpen] = useState(false)
  const { product, loading } = useContext(MainContext)

  return (
    <Grid container sx={{ width: 1, p: 5 }}>
      <Grid xs={12} md={4} sx={{ p: 1, minHeight: '70vh' }}>
        <CustomLoading loading={loading} height={40} width="20%" sx={{ mb: 1 }}>
          <Typography color="text.primary" variant="h5" gutterBottom>
            {product.title}
          </Typography>
        </CustomLoading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {' '}
          <ProductIcons />
          <ProductImages setOpen={setOpen} />
          <ProductModal setOpen={setOpen} open={open} />
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <ProductDetails />
      </Grid>
      <Grid xs={12}>
        <ProductComments />
      </Grid>
    </Grid>
  )
}

export default ProductContent
