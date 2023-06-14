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
    dispatch(addCategory({ values: category, setOpen, resetForm }))
  }

  const formik = useFormik({
    initialValues: { name: '', category_id: '', lang },
    onSubmit: (values, { resetForm }) => {
      handleAddNewCategory(values, resetForm)
    },
  })
  console.log(formik.errors)
  const fields = categoryFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت دسته بندی جدید
      </Button>
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
