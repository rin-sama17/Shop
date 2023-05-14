import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

import { categoryValidation } from '../../validations/categoryValidation'
import { useEditCategoryMutation } from '../../../api'
import { CustomModal, CustomForm } from '../../common'
import { categoryFieldsData } from '../../fieldsData'

const EditCategory = ({ category }) => {
  const [open, setOpen] = useState(false)
  const [updateCategotry] = useEditCategoryMutation()

  const handleEditCategory = async (values) => {
    const updatedCategory = { ...category, name: values.name }
    try {
      await updateCategotry(updatedCategory).unwrap()
      setOpen(false)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: { name: category.name },
    validationSchema: categoryValidation,
    onSubmit: (values) => {
      handleEditCategory(values)
    },
  })

  const fields = categoryFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="secondary"
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
