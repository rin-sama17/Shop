import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { discountValidation } from '../../validations/discountValidation'
import { useAddNewDiscountMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
import { discountFieldsData } from '../../fieldsData'

const AddDiscount = () => {
  const [open, setOpen] = useState(false)

  const [addNewDiscount, { isSuccess }] = useAddNewDiscountMutation()

  const handleAddNewDiscount = async (values) => {
    try {
      const { name, discount, category } = values
      await addNewDiscount({
        name,
        discount,
        category,
      }).unwrap()
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error.massage)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { name: '', discount: '', category_id: '' },
    validationSchema: discountValidation,
    onSubmit: (values, { resetForm }) => {
      handleAddNewDiscount(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = discountFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary" sx={{ m: 2 }}>
        ساخت تخفیف جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="secondary"
          label="ساخت تخفیف جدید"
        />
      </CustomModal>
    </>
  )
}

export default AddDiscount
