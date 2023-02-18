import { Box, Stack, Button, Container } from '@mui/material'
import React from 'react'
import { CustomFields, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { trackOrdersValidation } from '../components/validations/trackOrdersValidation'

import { Link as RouterLink } from 'react-router-dom'
import CartDetails from '../components/cart/CartDetails'

const TrackOrders = () => {
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
        <Button fullWidth sx={{ mb: 2 }} component={RouterLink} to="/checkout">
          جزئیات بیشتر و پرداخت
        </Button>
        <CartDetails />
      </Stack>
    </Container>
  )
}

export default TrackOrders
