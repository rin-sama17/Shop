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
  const [addNewCategory, { isSuccess }] = useAddNewCategoryMutation()

  const handleAddNewCategory = async (values) => {
    try {
      await addNewCategory(values)
      if (isSuccess) {
        setOpen(false)
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
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
