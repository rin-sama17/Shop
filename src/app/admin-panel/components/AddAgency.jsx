'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { agencyValidation } from '../validations/agencyValidation'
import { agencyFieldsData } from '../fieldsData'
import { CustomForm, CustomModal } from '@/components/common'
const AddAgency = () => {
  const [open, setOpen] = useState(false)
  const createAgency = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/agencies/store`
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
      image: '',
      address: '',
      phone: '',
      email: '',
      discription: '',
      lang: 'fa',
    },
    // validationSchema: agencyValidation,
    onSubmit: (values, { resetForm }) => {
      createAgency(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = agencyFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت نمایندگی جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ساخت نمایندگی جدید"
          formik={formik}
          fields={fields}
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 5 / 3 }}
        />
      </CustomModal>
    </>
  )
}

export default AddAgency
