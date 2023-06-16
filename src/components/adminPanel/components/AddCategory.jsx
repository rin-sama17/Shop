import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

import { categoryValidation } from '../../validations/categoryValidation'
import { CustomForm, CustomModal } from '../../common'
import { categoryFieldsData } from '../../fieldsData'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../reducers/categorySlice'
import { selectLang } from '../../../reducers/langSlice'
import AddBtn from './AddBtn'

const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const lang = useSelector(selectLang)

  const handleAddNewCategory = (values, resetForm) => {
    let category
    if (!values.category_id) {
      category = { name: values.name }
    } else {
      category = values
    }
    dispatch(addCategory({ values: { ...category, lang }, setOpen, resetForm }))
  }

  const formik = useFormik({
    initialValues: { name: '', category_id: '' },
    onSubmit: (values, { resetForm }) => {
      handleAddNewCategory(values, resetForm)
    },
  })
  console.log(formik.errors)
  const fields = categoryFieldsData(formik)
  return (
    <>
      <AddBtn setOpen={setOpen} title="ساخت دسته بندی جدید" />
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
