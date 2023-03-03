import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import Grid from '@mui/material/Unstable_Grid2'

import { categoryValidation } from '../../validations/categoryValidation'
import { useEditCategoryMutation } from '../../../api'
import { CustomModal, CustomDivider, CustomFields } from '../../common'

const EditCategory = ({ category }) => {
  const [open, setOpen] = useState(false)
  const [updateCategotry] = useEditCategoryMutation()

  const handleEditCategory = async (values) => {
    const updatedCategory = { ...category, name: values.name }
    try {
      await updateCategotry(updatedCategory).unwrap()
      setOpen(false)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }

  const formik = useFormik({
    initialValues: { name: category.name },
    validationSchema: categoryValidation,
    onSubmit: (values) => {
      handleEditCategory(values)
    },
  })

  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="primary"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomDivider label="ویرایش دسته بندی" color="info" />
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <CustomFields formik={formik} label="نام دسته بندی" name="name" />
            <Button fullWidth type="submit" color="secondary">
              ویرایش دسته بندی
            </Button>
          </Grid>
        </form>
      </CustomModal>
    </>
  )
}

export default EditCategory
