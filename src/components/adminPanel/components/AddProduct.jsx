import { Box, Button } from '@mui/material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productValidation } from '../../validations/productValidation'
import { toast } from 'react-toastify'
import { useAddNewProductMutation } from '../../../api'
import { nanoid } from '@reduxjs/toolkit'
import { productFieldsData } from '../../fieldsData'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../reducers/productSlice'

const AddProduct = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

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
      dispatch(addProduct({ values, setOpen }))
      resetForm()
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
