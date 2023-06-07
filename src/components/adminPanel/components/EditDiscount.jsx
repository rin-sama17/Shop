import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

import { discountValidation } from '../../validations/discountValidation'
import { useEditDiscountMutation } from '../../../api'
import { CustomModal, CustomForm } from '../../common'
import { discountFieldsData } from '../../fieldsData'
import { editDiscount } from '../../../reducers/discountSlice'
import { useDispatch } from 'react-redux'

const EditDiscount = ({ discountData }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: discountData,
    // validationSchema: discountValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editDiscount({ values, setOpen }))
      resetForm()
    },
  })
  const fields = discountFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="info"
          label="ویرایش تخفیف"
        />
      </CustomModal>
    </>
  )
}

export default EditDiscount
