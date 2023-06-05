'use client'

import { Button } from '@mui/material'
import { useState } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../validations/postValidation'
import { CustomForm, CustomModal } from '@/components/common'
import { postFieldsData } from '../fieldsData'

import React from 'react'

const AddPost = () => {
  const [open, setOpen] = useState(false)
  const createPost = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/posts/store`
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
  const postFields = {
    name: '',
    description: '',
    image: '',
    category_id: '',
    tags: '',
    user_id: 1,
    summary: '',
    lang: 'fa',
  }
  const formik = useFormik({
    initialValues: postFields,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      createPost(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = postFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت پست جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن پست جدید"
          color="warning"
          imageUploader
          imageUploaderName="image"
        />
      </CustomModal>
    </>
  )
}

export default AddPost
