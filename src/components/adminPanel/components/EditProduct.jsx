import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productValidation } from '../../validations/productValidation'
import { useEditProductMutation } from '../../../api/adminApi'
import { toast } from 'react-toastify'
import { productFieldsData } from '../../fieldsData'
import { useState } from 'react'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

const EditProduct = ({ product }) => {
  const [open, setOpen] = useState(false)
  const [updateProduct, { isSuccess }] = useEditProductMutation()
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
      if (isSuccess) {
        toast.success(`محصول ${values.name} با موفقیت ویرایش شد`)
        setOpen(false)
      }
    } catch (error) {
      console.log(error.massage)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...product },
    validationSchema: productValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values)
      resetForm()
    },
  })
  const fields = productFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="ویرایش محصول"
          color="warning"
          imageUploader
          imageUploaderName="thumbnail"
          imageUploaderProps={{ aspect: 3 / 4 }}
        />
      </CustomModal>
    </>
  )
}

export default EditProduct
