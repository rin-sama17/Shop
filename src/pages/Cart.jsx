import { Box, Stack, Button } from '@mui/material'
import React from 'react'
import { CustomFields } from '../components/common'
import { useFormik } from 'formik'
// import { cartValidation } from '../components/validations/cartValidation'
const Cart = () => {
  const handleSubmitForm = async () => {
    // try {
    //     await
    // } catch (error) {
    // }
  }

  const formik = useFormik({
    // initialValues: { },
    // validationSchema: cartValidation,
    // onSubmit: (values) => {
    //   handleSubmitForm(values)
    // },
  })

  return <></>
}

export default Cart
