import {
  Box,
  Card,
  Stack,
  Button,
  Skeleton,
  Container,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material'
import { useEffect, useMemo } from 'react'
import { CustomFields, ProductPrice, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { trackOrdersValidation } from '../components/validations/trackOrdersValidation'
import { useGetProductQuery } from '../api'
import Grid from '@mui/material/Unstable_Grid2'

import { toRial } from '../helpers'
import { Link as RouterLink } from 'react-router-dom'
import { cartItemsSeted, selectCartProducts } from '../reducers/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const Product = ({ productId, productCount }) => {
  const { data: product, isLoading } = useGetProductQuery(productId)

  if (isLoading) {
    return (
      <Card sx={{ mb: 2, p: 2 }}>
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row">
            <Skeleton
              sx={{ height: 60, width: 60 }}
              animation="wave"
              variant="rectangular"
            />
            <Skeleton animation="wave" width={60} height={30} sx={{ ml: 2 }} />
          </Stack>
          <Skeleton animation="wave" width="20%" height={60} />
        </Stack>
      </Card>
    )
  }
  console.log('rerender')
  return (
    <Card sx={{ mb: 2 }}>
      <CardActionArea
        component={RouterLink}
        to={`/product/${product.id}`}
        sx={{ p: 2 }}
      >
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row">
            <CardMedia
              component="img"
              sx={{ height: 60, width: 60 }}
              alt={product.name}
              image={product.thumbnail}
            />
            <Typography variant="body1" color="text.primary" sx={{ ml: 2 }}>
              {product.name}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ ml: 2, display: 'flex' }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mr: 2 }}>
                تعداد:
              </Typography>
              {productCount} عدد
            </Typography>
          </Stack>
          <ProductPrice price={product.price} discount={product.discount} />
        </Stack>
      </CardActionArea>
    </Card>
  )
}
const Cart = () => {
  const products = useSelector(selectCartProducts)
  let totalPrice
  let totalDiscount
  if (products.length > 0) {
    totalPrice = products.reduce((a, b) => a + b.price * b.count, 0)

    const prevPrice = products.reduce(
      (a, b) => a + (b.price + b.price * b.discount) * b.count,
      0,
    )
    totalDiscount = Math.round((prevPrice - totalPrice) / totalPrice)
    console.log('totalPrice: ', totalPrice)
    console.log('prevPrice: ', prevPrice)
    console.log('totalDiscount: ', totalDiscount)
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <Grid container sx={{ width: 1 }} spacing={2}>
        <Grid xs={12} md={8}>
          {products.map((product) => (
            <Product
              productId={product.id}
              productCount={product.count}
              key={product.id}
            />
          ))}
        </Grid>
        <Grid xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{ mr: 1, display: 'flex' }}
              gutterBottom
            >
              مجموع کل:
              <Typography
                color="text.primary"
                variant="body1"
                sx={{ mr: 1, display: 'flex' }}
              >
                {totalPrice && totalDiscount ? (
                  <ProductPrice price={totalPrice} discount={totalDiscount} />
                ) : null}
              </Typography>
            </Typography>

            <Button color="secondary" fullWidth variant="contained">
              پرداخت
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
