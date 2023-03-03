import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { discountValidation } from '../../validations/discountValidation'
import { useAddNewDiscountMutation } from '../../../api'
import { CustomDivider, CustomFields, CustomModal } from '../../common'

const AddDiscount = () => {
  const [open, setOpen] = useState(false)

  const [addNewDiscount] = useAddNewDiscountMutation()

  const handleAddNewDiscount = async (values) => {
    try {
      const { name, discount, category } = values
      await addNewDiscount({
        name,
        discount,
        category,
      })
      setOpen(false)
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: { name: '', discount: '', category: '' },
    validationSchema: discountValidation,
    onSubmit: (values) => {
      handleAddNewDiscount(values)
    },
  })
  return (
    <>
      <Button onClick={() => setOpen(true)} color="success" sx={{ m: 2 }}>
        ساخت تخفیف جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomDivider label="تخفیف جدید" color="success" />
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
            <Button fullWidth type="submit" color="success">
              افزودن تخفیف
            </Button>
          </Grid>
        </form>
      </CustomModal>
    </>
  )
}

export default AddDiscount
