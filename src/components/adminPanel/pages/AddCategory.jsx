import { Modal, Card, Button } from '@mui/material'
import { useState } from 'react'

import { CustomDivider, CustomFields } from '../../common'
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Card sx={{ width: '90%', p: 3 }}>
          <CustomDivider label="دسته بندی جدید" color="secondary" />
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <CustomFields formik={formik} label="نام دسته بندی" name="name" />
              <Button fullWidth type="submit" color="secondary">
                افزودن دسته بندی
              </Button>
            </Grid>
          </form>
        </Card>
      </Modal>
    </>
  )
}

export default AddCategory
