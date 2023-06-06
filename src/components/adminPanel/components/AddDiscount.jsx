import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { discountValidation } from '../../validations/discountValidation'
import { useAddNewDiscountMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
import { discountFieldsData } from '../../fieldsData'
import { useDispatch } from 'react-redux'
import { addDiscount } from '../../../reducers/discountSlice'

const AddDiscount = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { name: '', discount: '', category_id: '' },
    validationSchema: discountValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addDiscount({ values, setOpen }))
      resetForm()
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
