'use client'

import { useFormik } from 'formik'
import { postValidation } from '../validations/postValidation'
import { postFieldsData } from '../fieldsData'
import { CustomModal, CustomForm } from '@/components/common'
import { useState } from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Edit } from '@mui/icons-material'

const EditPost = ({ post }) => {
  const [open, setOpen] = useState(false)
  const updatePost = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/posts/update/${values.id}`
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
    initialValues: post,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      updatePost(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = postFieldsData(formik)
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
          label="ویرایش پست"
          color="success"
          imageUploader
          imageUploaderName="thumbnail"
          imageUploaderProps={{ aspect: 16 / 7 }}
        />
      </CustomModal>
    </>
  )
}

export default EditPost
