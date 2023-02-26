import { GridActionsCellItem } from '@mui/x-data-grid'
import { useEditDiscountMutation } from '../../../api'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Edit } from '@mui/icons-material'
import { CustomModal, CustomDivider, CustomFields } from '../../common'
import { useState } from 'react'
import { discountValidation } from '../../validations/discountValidation'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
const EditDiscount = ({ discountData }) => {
  const [open, setOpen] = useState(false)
  const [updateDiscount] = useEditDiscountMutation()

  const handleEditDiscount = async (values) => {
    const { name, discount, category } = values
    const updatedDiscount = {
      id: discountData.id,
      name,
      discount,
      category,
    }
    try {
      await updateDiscount(updatedDiscount).unwrap()
      setOpen(false)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: discountData.name,
      discount: discountData.discount,
      category: discountData.category,
    },
    validationSchema: discountValidation,
    onSubmit: (values) => {
      handleEditDiscount(values)
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
        <CustomDivider label="ویرایش تخفیف" color="info" />
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <CustomFields formik={formik} label="نام" name="name" md={7} />
            <CustomFields
              formik={formik}
              label="تخفیف(به درصد)"
              name="discount"
              type="number"
              md={5}
              helperText={
                formik.errors.discount ? formik.errors.discount : null
              }
            />
            <CustomFields formik={formik} name="category" category md={12} />
            <Button fullWidth type="submit" color="info">
              ویرایش تخفیف
            </Button>
          </Grid>
        </form>
      </CustomModal>
    </>
  )
}

export default EditDiscount
