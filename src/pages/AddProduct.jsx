import { Box } from '@mui/material'

import { useFormik } from 'formik'
import { CustomForm } from '../components/common'
import { productValidation } from '../components/validations/productValidation'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAddNewProductMutation } from '../api'
import { nanoid } from '@reduxjs/toolkit'
import { productFieldsData } from '../components/fieldsData'

const AddProduct = () => {
  const navigate = useNavigate()

  const [addNewProduct] = useAddNewProductMutation()

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
      toast.success(`محصول ${values.name} با موفقیت ساخته شد`)
      navigate(-1)
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
    category: '',
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
    <Box
      sx={{
        width: 1,
        px: 3,
        py: 3,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <CustomForm
        formik={formik}
        fields={fields}
        label="افزودن محصول جدید"
        color="warning"
        imageUploader
        imageUploaderName="thumbnail"
      />
    </Box>
  )
}

export default AddProduct
