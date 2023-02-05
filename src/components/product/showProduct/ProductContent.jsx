import { useState, useContext } from 'react'
import MainContext from '../../../context'

import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography, Card, Button, TextField } from '@mui/material'
import {
  ProductImages,
  ProductModal,
  ProductDetails,
  ProductComments,
  ProductIcons,
} from '.'
import {
  CustomDivider,
  CustomLoading,
  CustomIconButton,
  ProductPrice,
} from '../../common'
import { ReportGmailerrorred } from '@mui/icons-material'

const ProductContent = ({ product }) => {
  return (
    <Grid container sx={{ width: 1, p: 5 }}>
      <Grid xs={12} md={4} sx={{ p: 1, minHeight: '70vh' }}>
        <CustomLoading height={40} width="20%" sx={{ mb: 1 }}>
          <Typography color="text.primary" variant="h5" gutterBottom>
            {product.name}
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
          <ProductImages product={product} />
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <ProductDetails product={product} />
      </Grid>

      <Grid xs={12} md={4} sx={{ p: 1 }}>
        <Card sx={{ p: 2 }}>
          <Box sx={{ px: 2 }}>
            {product.stock === 0 ? (
              <CustomDivider
                label={
                  <>
                    موجود نیست
                    <CustomIconButton
                      color="warning"
                      title="زمانی که موجود شد به من اطلاع بده"
                      icon={<ReportGmailerrorred />}
                    />
                  </>
                }
              />
            ) : (
              <CustomDivider label="موجود در انبار" color="success" />
            )}{' '}
          </Box>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ mr: 1, display: 'flex' }}
            gutterBottom
          >
            قیمت:
            <ProductPrice price={product.price} discount={product.discount} />
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ mr: 1, display: 'flex' }}
          >
            فروشنده:
            <Typography color="secondary">ممد</Typography>
          </Typography>{' '}
          <Box
            sx={{
              width: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1,
              mt: 4,
            }}
          >
            <Button
              color="secondary"
              disabled={product.stock === 0 ? true : false}
            >
              +
            </Button>
            <Typography sx={{ mx: 1 }}>1</Typography>
            <Button
              color="secondary"
              disabled={product.stock === 0 ? true : false}
            >
              -
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Button
              color="secondary"
              fullWidth
              variant="contained"
              disabled={product.stock === 0 ? true : false}
            >
              افزودن به سبد خرید
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid xs={12}>
        <ProductComments />
      </Grid>
    </Grid>
  )
}

export default ProductContent
