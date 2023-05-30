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

const EditDiscount = ({ discountData }) => {
  const [open, setOpen] = useState(false)
  const [updateDiscount] = useEditDiscountMutation()

  const handleEditDiscount = async (values) => {
    const updatedDiscount = {
      id: discountData.id,
      ...value,
    }
    try {
      await updateDiscount(updatedDiscount).unwrap()
      if (isSuccess) {
        setOpen(false)
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: {
      ...discountData,
    },
    validationSchema: discountValidation,
    onSubmit: (values) => {
      handleEditDiscount(values)
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
