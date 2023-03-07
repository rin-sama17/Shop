import { Stack, Button, Container } from '@mui/material'
import { CustomFields, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { checkoutValidation } from '../components/validations/checkoutValidation'
import Grid from '@mui/material/Unstable_Grid2'
import { CartDetails } from '../components/cart'
import { selectCartProducts } from '../reducers/cartSlice'
import { useSelector } from 'react-redux'
import { useAddNewCartMutation } from '../api'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
const Checkout = () => {
  const cartProducts = useSelector(selectCartProducts)
  const [cartId, setCartId] = useState()
  const navigate = useNavigate()
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
    navigate(`/checkout/${cartId}`)
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
