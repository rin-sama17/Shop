import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

import { categoryValidation } from '../../validations/categoryValidation'
import { useAddNewCategoryMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
import { categoryFieldsData } from '../../fieldsData'
import { toast } from 'react-toastify'

const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const [addNewCategory, { isSuccess, error }] = useAddNewCategoryMutation()

  const handleAddNewCategory = async (values) => {
    try {
      console.log(values)
      let newCategory
      if (values.category_id.length === 0) {
        newCategory = { name: values.name }
      } else {
        newCategory = values
      }
      await addNewCategory(newCategory).unwrap()
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { name: '', category_id: null },
    validationSchema: categoryValidation,
    onSubmit: (values, { resetForm }) => {
      handleAddNewCategory(values)
      resetForm()
      setOpen(false)
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
