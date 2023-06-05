'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { categoryValidation } from '../validations/categoryValidation'
import { CustomForm, CustomModal } from '@/components/common'
import { categoryFieldsData } from '../fieldsData'

const AddCategory = () => {
  const [open, setOpen] = useState(false)
  const createCategory = async (values) => {
    'use server'

    let category
    if (!values.category_id) {
      category = { name: values.name, lang: values.lang }
    } else {
      category = values
    }

    try {
      const url = 'http://127.0.0.1:8000/api/admin/categories/store'
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: category,
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
    initialValues: { name: '', category_id: '', lang: 'fa' },
    validationSchema: categoryValidation,
    onSubmit: (values, { resetForm }) => {
      createCategory(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = categoryFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت دسته بندی جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ساخت دسته بندی جدید"
          formik={formik}
          fields={fields}
          color="success"
        />
      </CustomModal>
    </>
  )
}

export default AddCategory
