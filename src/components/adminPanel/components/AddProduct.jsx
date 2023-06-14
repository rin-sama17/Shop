import { Button } from '@mui/material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productValidation } from '../../validations/productValidation'
import { productFieldsData } from '../../fieldsData'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../reducers/productSlice'
import { selectLang } from '../../../reducers/langSlice'

const AddProduct = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const productFieldNames = {
    name: '',
    price: '',
    discount: '',
    description: '',
    remaining: '',
    image: null,
    category_id: '',
    tags: '',
    lang,
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    onSubmit: (values, { resetForm }) => {
      const newProduct = {
        ...values,
        discount: Number(values.discount),
      }
      console.log('values:  ', newProduct)
      dispatch(addProduct({ values: newProduct, setOpen, resetForm }))
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
