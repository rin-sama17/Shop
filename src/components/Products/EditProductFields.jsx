import { useFormik } from 'formik'
import { CustomForm } from '../common'
import { useNavigate } from 'react-router-dom'
import { productValidation } from '../validations/productValidation'
import { useEditProductMutation } from '../../api'
import { toast } from 'react-toastify'
import { productFieldsData } from '../fieldsData'

const EditProductFields = ({ product }) => {
  const navigate = useNavigate()

  const [updateProduct] = useEditProductMutation()

  const handleSubmitForm = async (values) => {
    try {
      const { id, date } = product
      const { price: productPrice, discount } = values

      const price = Math.round(productPrice - (productPrice * discount) / 100)
      await updateProduct({
        ...values,
        id,
        date,
        price,
      })
      toast.success(`محصول ${values.name} با موفقیت ویرایش شد`)
      navigate(-1)
    } catch (error) {
      console.log(error.massage)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...product },
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
      label="ویرایش محصول"
      color="warning"
      imageUploader
      imageUploaderName="thumbnail"
      imageUploaderProps={{ aspect: 3 / 4 }}
    />
  )
}

export default EditProductFields
