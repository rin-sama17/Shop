import { useState } from 'react'
import { useFormik } from 'formik'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

import { CustomModal, CustomForm } from '../../common'
import { categoryFieldsData } from '../../fieldsData'
import { editCategory } from '../../../reducers/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'

const EditCategory = ({ category }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const handelEditCategory = (values, resetForm) => {
    let category
    if (!values.category_id) {
      category = { id: values.id, name: values.name }
    } else {
      category = values
    }
    dispatch(
      editCategory({ values: { ...category, lang }, setOpen, resetForm }),
    )
  }

  const formik = useFormik({
    initialValues: category,
    onSubmit: (values, { resetForm }) => {
      handelEditCategory(values, resetForm)
    },
  })

  const fields = categoryFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
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
