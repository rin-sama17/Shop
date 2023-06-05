'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { discountValidation } from '../validations/discountValidation'
import { CustomForm, CustomModal } from '@/components/common'
import { discountFieldsData } from '../fieldsData'

const AddDiscount = () => {
  const [open, setOpen] = useState(false)
  const createDiscount = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/discounts/store`
      const res = await fetch(url, {
        method: 'POST',
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
    initialValues: { name: '', discount: '', category_id: '', lang: 'fa' },
    // validationSchema: discountValidation,
    onSubmit: (values, { resetForm }) => {
      createDiscount(values)
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
