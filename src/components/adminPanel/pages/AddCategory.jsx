import { Button } from '@mui/material'
import { useState } from 'react'

import { CustomDivider, CustomFields, CustomModal } from '../../common'
import { useFormik } from 'formik'
import { categoryValidation } from '../../validations/categoryValidation.js'

import Grid from '@mui/material/Unstable_Grid2'
import { useAddNewCategoryMutation } from '../../../api'
import { nanoid } from '@reduxjs/toolkit'

const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const [addNewCategory] = useAddNewCategoryMutation()

  const handleAddNewCategory = async (values) => {
    try {
      const { name } = values
      await addNewCategory({
        id: nanoid(),
        name,
      })
      setOpen(false)
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema: categoryValidation,
    onSubmit: (values) => {
      handleAddNewCategory(values)
    },
  })
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت دسته بندی جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomDivider label="دسته بندی جدید" color="secondary" />
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <CustomFields formik={formik} label="نام دسته بندی" name="name" />
            <Button fullWidth type="submit" color="secondary">
              افزودن دسته بندی
            </Button>
          </Grid>
        </form>
      </CustomModal>
    </>
  )
}

export default AddCategory
