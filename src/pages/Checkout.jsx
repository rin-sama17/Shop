import { Stack, Container } from '@mui/material'
import { CustomDivider, CustomForm } from '../components/common'
import { useFormik } from 'formik'
import { checkoutValidation } from '../components/validations/checkoutValidation'
import { CartDetails } from '../components/cart'
import { selectCartProducts } from '../reducers/cartSlice'
import { useSelector } from 'react-redux'
import { useAddNewCartMutation } from '../api'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { checkoutFieldsData } from '../components/fieldsData'
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
  const fields = checkoutFieldsData(formik)
  return (
    <>
      <CustomDivider label="سبد خرید شما" />
      <CartDetails isLocal />
      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Stack alignItems="center" sx={{ width: 1, mt: 4 }}>
          <CustomForm
            fields={fields}
            formik={formik}
            label="پرداخت"
            color="success"
          />
        </Stack>
      </Container>
    </>
  )
}
export default Checkout
