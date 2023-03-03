import { Stack, Button, Container, Card, Typography } from '@mui/material'
import { CustomFields, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { checkoutValidation } from '../components/validations/checkoutValidation'
import Grid from '@mui/material/Unstable_Grid2'
import { CartDetails } from '../components/cart'
import { selectCartProducts } from '../reducers/cartSlice'
import { useSelector } from 'react-redux'
import { useAddNewCartMutation } from '../api'
import { nanoid } from '@reduxjs/toolkit'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Checkout = () => {
  const cartProducts = useSelector(selectCartProducts)
  const [cartId, setCartId] = useState()
  useEffect(() => {
    const userCartId = nanoid()
    setCartId(userCartId)
  }, [])
  const checkoutFields = {
    fullName: '',
    phone: '',
    address: '',
  }
  const [addNewCart, { isSuccess }] = useAddNewCartMutation()

  const handleSubmitForm = async (values) => {
    try {
      const { fullName, phone, address } = values
      await addNewCart({
        id: cartId,
        fullName,
        phone,
        address,
        products: cartProducts,
      })
      if (isSuccess) {
        localStorage.setItem('cartProducts', JSON.stringify([]))
      }
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: checkoutFields,
    validationSchema: checkoutValidation,
    onSubmit: (values) => {
      handleSubmitForm(values)
    },
  })

  if (isSuccess) {
    return (
      <Stack justifyContent="center" alignItems="center" sx={{ width: 1 }}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h4" sx={{ mb: 3, color: 'success.main' }}>
            سفارش شما ثبت شد
          </Typography>
          <Typography variant="body1" color="text.secondary">
            کد پیگیری:
            <Typography variant="body1" color="text.primary">
              {cartId}
            </Typography>
          </Typography>
          <Button fullWidth sx={{ mt: 2 }} component={Link} to="/">
            بازگشت به خانه
          </Button>
        </Card>
      </Stack>
    )
  }

  return (
    <>
      <CustomDivider label="سبد خرید شما" />
      <CartDetails isLocal />
      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Stack alignItems="center" sx={{ width: 1, mt: 4 }}>
          <CustomDivider label="پرداخت" color="success" />
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={2}
              sx={{
                width: 1,
              }}
            >
              <CustomFields
                formik={formik}
                name="fullName"
                label="نام و نام خانوادگی"
                md={6}
              />
              <CustomFields formik={formik} name="phone" phone md={6} />
              <CustomFields
                formik={formik}
                name="address"
                label="ادرس"
                multiline
                rows={6}
              />{' '}
              <Button
                type="submit"
                color="success"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                پرداخت
              </Button>
            </Grid>
          </form>
        </Stack>
      </Container>{' '}
    </>
  )
}
export default Checkout
