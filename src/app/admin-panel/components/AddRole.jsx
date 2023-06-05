'use client'

import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'

import { CustomForm, CustomModal } from '@/components/common'
import { roleFieldsData } from '../fieldsData'
import { roleValidation } from '../validations/roleValidation'

const AddRole = () => {
  const [open, setOpen] = useState(false)
  const createRole = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/roles/store`
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
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      createRole(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = roleFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary">
        افزودن نقش جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm formik={formik} fields={fields} label="افزودن نقش جدید" />
      </CustomModal>
    </>
  )
}

export default AddRole
