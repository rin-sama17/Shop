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
      console.log(error)
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
  const fields = discountFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="primary"
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
