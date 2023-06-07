import { useState } from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

import { categoryValidation } from '../../validations/categoryValidation'
import { useEditCategoryMutation } from '../../../api'
import { CustomModal, CustomForm, CustomIconButton } from '../../common'
import { categoryFieldsData } from '../../fieldsData'
import { editCategory } from '../../../reducers/categorySlice'
import { useDispatch } from 'react-redux'

const EditCategory = ({ category }) => {
  const [open, setOpen] = useState(false)
  const [updateCategotry, { isSuccess }] = useEditCategoryMutation()

  const dispatch = useDispatch()

  const handelEditCategory = (values) => {
    let category
    if (!values.category_id) {
      category = { id: values.id, name: values.name }
    } else {
      category = values
    }
    dispatch(editCategory({ category, setOpen }))
  }

  const formik = useFormik({
    initialValues: category,
    // validationSchema: categoryValidation,
    onSubmit: (values, { resetForm }) => {
      handelEditCategory(values)
      resetForm()
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
