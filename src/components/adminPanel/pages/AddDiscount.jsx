import { Button } from '@mui/material'
import { useState } from 'react'

import { CustomDivider, CustomFields, CustomModal } from '../../common'
import { useFormik } from 'formik'
import { discountValidation } from '../../validations/discountValidation.js'

import Grid from '@mui/material/Unstable_Grid2'
import { useGetDiscountsQuery, useAddNewDiscountMutation } from '../../../api'

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
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }}>
        ساخت تخفیف جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomDivider label="تخفیف جدید" color="error" />
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
            <Button fullWidth type="submit" sx={{ color: 'tomato' }}>
              افزودن تخفیف
            </Button>
          </Grid>
        </form>
      </CustomModal>
    </>
  )
}

export default AddDiscount
