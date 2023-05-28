import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

import { categoryValidation } from '../../validations/categoryValidation'
import { useAddNewCategoryMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
import { categoryFieldsData } from '../../fieldsData'

const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const [addNewCategory] = useAddNewCategoryMutation()

  const handleAddNewCategory = async (values) => {
    try {
      await addNewCategory(values)
      setOpen(false)
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: categoryValidation,
    onSubmit: (values, { resetForm }) => {
      handleAddNewCategory(values)
      resetForm()
    },
  })
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
