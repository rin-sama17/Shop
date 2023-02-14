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
import React from 'react'
import { CustomFields, ProductPrice, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { trackOrdersValidation } from '../components/validations/trackOrdersValidation'
import { useGetProductQuery } from '../api'
import Grid from '@mui/material/Unstable_Grid2'

import { Link as RouterLink } from 'react-router-dom'
const Product = ({ productId }) => {
  const { data: product, isLoading } = useGetProductQuery(productId)

  if (isLoading || productId === 'tM_MOwtFcG4cqrIyDgDy_') {
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
          </Stack>
          <ProductPrice price={product.price} discount={product.discount} />
        </Stack>
      </CardActionArea>
    </Card>
  )
}
const TrackOrders = () => {
  const products = [
    'tM_MOwtFcG4cqrIyDgDy_',
    'EfJZxbsylFHZwWZXnOzVN',
    'Q1cm65nQwUtF7b6r-DbaC',
  ]

  const handleSubmitForm = async () => {
    // try {
    //     await
    // } catch (error) {
    // }
  }

  const formik = useFormik({
    initialValues: { cartId: '' },
    validationSchema: trackOrdersValidation,
    // onSubmit: (values) => {
    //   handleSubmitForm(values)
    // },
  })

  return (
    <Container maxWidth="md">
      <Stack alignItems="center" sx={{ width: 1 }}>
        <Box sx={{ width: 2 / 3, mt: 4 }}>
          <CustomFields formik={formik} name="cartId" label="کد پیگیری" />
          <Button sx={{ mt: 1 }}>جستجو</Button>
        </Box>

        <CustomDivider label="سبد خرید شما" color="primary" sx={{ my: 2 }} />

        <Box sx={{ width: 1 }}>
          {products.map((productId) => (
            <Product productId={productId} key={productId} />
          ))}
        </Box>
      </Stack>
    </Container>
  )
}

export default TrackOrders
