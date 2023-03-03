import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import Grid from '@mui/material/Unstable_Grid2'

import { categoryValidation } from '../../validations/categoryValidation'
import { useAddNewCategoryMutation } from '../../../api'
import { CustomDivider, CustomFields, CustomModal } from '../../common'

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
