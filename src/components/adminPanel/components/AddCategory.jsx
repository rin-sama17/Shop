import { useState } from 'react'
import { useFormik } from 'formik'

import { CustomForm, CustomModal } from '../../common'
import { categoryFieldsData } from '../../fieldsData'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCategory,
  selectCategoryAccess,
} from '../../../reducers/categorySlice'
import { selectLang } from '../../../reducers/langSlice'
import { AddBtn } from '.'

const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const access = useSelector(selectCategoryAccess)
  const lang = useSelector(selectLang)

  const handleAddNewCategory = (values, resetForm, setErrors) => {
    let category
    if (!values.category_id) {
      category = { name: values.name }
    } else {
      category = values
    }
    dispatch(
      addCategory({
        values: { ...category, lang },
        setOpen,
        resetForm,
        setErrors,
      }),
    )
  }

  const formik = useFormik({
    initialValues: { name: '', category_id: '' },
    onSubmit: (values, { resetForm, setErrors }) => {
      handleAddNewCategory(values, resetForm, setErrors)
    },
  })
  const fields = categoryFieldsData(formik)
  return (
    <>
      <AddBtn setOpen={setOpen} title="ساخت دسته بندی جدید" access={access} />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ساخت دسته بندی جدید"
          formik={formik}
          fields={fields}
          color="success"
        />
      </CustomModal>
    </>
  )
}

export default AddCategory
