'use client'

import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'

import { CustomForm, CustomModal } from '@/components/common'
import { premissionFieldsData } from '../fieldsData'
import { premissionValidation } from '../validations/premissionValidation'

const AddPremission = () => {
  const [open, setOpen] = useState(false)
  const createPremission = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/premissions/store`
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
    initialValues: {
      name: '',
      description: '',
      lang: 'fa',
    },
    validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      createPremission(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = premissionFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary" sx={{ m: 2 }}>
        افزودن دسترسی جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن دسترسی جدید"
        />
      </CustomModal>
    </>
  )
}

export default AddPremission
