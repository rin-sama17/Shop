import * as Yup from 'yup'
import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productFieldsData } from '../../fieldsData'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProduct,
  selectProductDetails,
} from '../../../reducers/productSlice'
import { selectLang } from '../../../reducers/langSlice'
import { AddBtn } from '.'
import { useTranslation } from 'react-i18next'

const AddProduct = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { access } = useSelector(selectProductDetails)
  const lang = useSelector(selectLang)
  const { t } = useTranslation()

  const productFieldNames = {
    name: '',
    price: '',
    discount: 0,
    description: '',
    remaining: '',
    image: null,
    category_id: '',
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    validationSchema: Yup.object().shape({
      discount: Yup.number()
        .integer()
        .min(0, t('تخفیف نمیتواند کمتر از صفر باشد'))
        .max(99, t('تخفیف نمیتواند بیشتر از 99 درصد باشد')),
      price: Yup.number(),
    }),
    onSubmit: (values, { resetForm, setErrors }) => {
      const newProduct = {
        ...values,
        lang,
        price: String(values.price),
        discount: Number(values.discount),
      }
      console.log(newProduct)
      dispatch(
        addProduct({ values: newProduct, setOpen, resetForm, setErrors }),
      )
    },
  })
  const fields = productFieldsData(formik)
  return (
    <>
      <AddBtn setOpen={setOpen} title="افزودن محصول جدید" access={access} />

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
