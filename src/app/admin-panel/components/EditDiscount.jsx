'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

import { discountValidation } from '../validations/discountValidation'
import { CustomModal, CustomForm } from '@/components/common'
import { discountFieldsData } from '../fieldsData'

const EditDiscount = ({ discountData }) => {
  const [open, setOpen] = useState(false)
  const updateDiscount = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/discounts/update/${values.id}`
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: values,
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
    }
  }

  const formik = useFormik({
    initialValues: discountData,
    // validationSchema: discountValidation,
    onSubmit: (values, { resetForm }) => {
      updateDiscount(values)
      resetForm()
      setOpen(false)
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
