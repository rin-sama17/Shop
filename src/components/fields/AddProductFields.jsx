import { useFormik } from 'formik'
import { CustomForm } from '../common'
import { productValidation } from '../validations/productValidation'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAddNewProductMutation } from '../../api'
import { nanoid } from '@reduxjs/toolkit'
import { productFieldsData } from './data/productFieldsData'

const AddProductFields = () => {
  const navigate = useNavigate()

  const [addNewProduct] = useAddNewProductMutation()

  const handleSubmitForm = async (values) => {
    try {
      const { price: productPrice, discount } = values
      let numberedPrice = Number(productPrice.split(',').join(''))
      const price = Math.round(numberedPrice - (numberedPrice * discount) / 100)
      const newProduct = {
        id: nanoid(),
        date: new Date().toISOString(),
        ...values,
        price,
      }
      await addNewProduct(newProduct).unwrap()
      toast.success('پست جدید با موفقیت ساخته شد')
      navigate('/')
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
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
    <CustomForm
      formik={formik}
      fields={fields}
      label="افزودن محصول جدید"
      color="warning"
      imageUploader
      imageUploaderName="thumbnail"
    />
  )
}

export default AddProductFields
