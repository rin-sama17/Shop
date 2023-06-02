import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

import { categoryValidation } from '../../validations/categoryValidation'
import { useEditCategoryMutation } from '../../../api'
import { CustomModal, CustomForm, CustomIconButton } from '../../common'
import { categoryFieldsData } from '../../fieldsData'

const EditCategory = ({ category }) => {
  const [open, setOpen] = useState(false)
  const [updateCategotry, { isSuccess }] = useEditCategoryMutation()

  const handleEditCategory = async (values) => {
    const updatedCategory = { ...values }
    try {
      await updateCategotry(updatedCategory).unwrap()
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...category },
    validationSchema: categoryValidation,
    onSubmit: (values, { resetForm }) => {
      handleEditCategory(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = categoryFieldsData(formik)
  return (
    <>
      <CustomIconButton
        icon={<Edit />}
        color="info"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش دسته بندی"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditCategory
