'use client'

import { Button } from '@mui/material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '@/components/common'
import { productValidation } from '../validations/productValidation'
import { productFieldsData } from '../fieldsData'
import { useState } from 'react'

const AddProduct = () => {
  const [open, setOpen] = useState(false)
  const createProduct = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/admin/products/store`
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: values,
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
    }
  }

  const productFieldNames = {
    name: '',
    price: '',
    discount: '',
    description: '',
    remaining: '',
    image: '',
    category_id: '',
    tags: '',
    lang: 'fa',
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    onSubmit: (values, { resetForm }) => {
      createProduct(values)
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
