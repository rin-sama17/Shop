import { GridActionsCellItem } from '@mui/x-data-grid'
import { useEditCategoryMutation } from '../../../api'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Edit } from '@mui/icons-material'
import { CustomModal, CustomDivider, CustomFields } from '../../common'
import { useState } from 'react'
import { categoryValidation } from '../../validations/categoryValidation'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
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
