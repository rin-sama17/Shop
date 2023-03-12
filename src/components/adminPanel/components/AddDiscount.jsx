import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { discountValidation } from '../../validations/discountValidation'
import { useAddNewDiscountMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
import { discountFieldsData } from '../../fieldsData'

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
    onSubmit: (values, { resetForm }) => {
      handleAddNewDiscount(values)
      resetForm()
    },
  })
  const fields = discountFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="success" sx={{ m: 2 }}>
        ساخت تخفیف جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="success"
          label="ساخت تخفیف جدید"
        />
      </CustomModal>
    </>
  )
}

export default AddDiscount
