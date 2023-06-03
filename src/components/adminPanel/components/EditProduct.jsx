import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productValidation } from '../../validations/productValidation'
import { useEditProductMutation } from '../../../api'
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
      await updateProduct(values).unwrap()
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...product },
    // validationSchema: productValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values)
      resetForm()
      setOpen(false)
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
