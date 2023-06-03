import { Box, Button } from '@mui/material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productValidation } from '../../validations/productValidation'
import { toast } from 'react-toastify'
import { useAddNewProductMutation } from '../../../api'
import { nanoid } from '@reduxjs/toolkit'
import { productFieldsData } from '../../fieldsData'
import { useState } from 'react'

const AddProduct = () => {
  const [open, setOpen] = useState(false)
  const [addNewProduct, { isSuccess, error }] = useAddNewProductMutation()
  const handleSubmitForm = async (values) => {
    try {
      const {
        price: productPrice,
        discount,
        name,
        description,
        remaining,
        image,
        category_id,
        tags,
      } = values
      const price = Math.round(productPrice - (productPrice * discount) / 100)
      const newProduct = {
        discount,
        name,
        description,
        remaining,
        image,
        category_id,
        tags,
        price,
      }
      console.log(newProduct, typeof newProduct)
      await addNewProduct(newProduct)
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (err) {
      console.log(error.error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }
  console.log(isSuccess, error?.error)
  const productFieldNames = {
    name: '',
    price: '',
    discount: '',
    description: '',
    remaining: '',
    image: '',
    category_id: '',
    tags: '',
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = productFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت محصول جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن محصول جدید"
          color="warning"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 3 / 4 }}
        />
      </CustomModal>
    </>
  )
}

export default AddProduct
