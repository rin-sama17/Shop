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
  const [addNewProduct, { isSuccess }] = useAddNewProductMutation()

  const handleSubmitForm = async (values) => {
    try {
      const { price: productPrice, discount } = values
      const price = Math.round(productPrice - (productPrice * discount) / 100)
      const newProduct = {
        id: nanoid(),
        date: new Date().toISOString(),
        ...values,
        price,
      }
      await addNewProduct(newProduct).unwrap()
      if (isSuccess) {
        toast.success(`محصول ${values.name} با موفقیت ساخته شد`)
        setOpen(false)
      }
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const productFieldNames = {
    name: '',
    price: '',
    discount: '',
    details: '',
    stock: '',
    thumbnail: '',
    category_id: '',
    tags: '',
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    validationSchema: productValidation,
    onSubmit: (values) => {
      handleSubmitForm(values)
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
          imageUploaderName="thumbnail"
          imageUploaderProps={{ aspect: 3 / 4 }}
        />
      </CustomModal>
    </>
  )
}

export default AddProduct
