import { Box, Stack, Button, Container } from '@mui/material'
import { useState } from 'react'
import { CustomFields, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { trackOrdersValidation } from '../components/validations/trackOrdersValidation'

import { Link as RouterLink } from 'react-router-dom'
import CartDetails from '../components/cart/CartDetails'

const TrackOrders = () => {
  const [userCartId, setCartId] = useState()

  const formik = useFormik({
    initialValues: { cartId: '' },
    validationSchema: trackOrdersValidation,
    onSubmit: (values) => {
      setCartId(values.cartId)
    },
  })

  return (
    <>
      <Container maxWidth="md">
        <Stack alignItems="center" sx={{ width: 1 }}>
          <Box sx={{ width: 2 / 3, mt: 4 }}>
            <form onSubmit={formik.handleSubmit}>
              <CustomFields formik={formik} name="cartId" label="کد پیگیری" />
              <Button type="submit" sx={{ mt: 1 }}>
                جستجو
              </Button>
            </form>
          </Box>
        </Stack>
      </Container>
      {userCartId && (
        <>
          <CustomDivider label="سبد خرید شما" color="primary" sx={{ my: 2 }} />

          <CartDetails cartId={userCartId} />
        </>
      )}
    </>
  )
}

export default TrackOrders
