import { Button } from '@mui/material'
import { CustomForm, CustomModal, TextEditor } from '../../common'
import { useState } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../../validations/postValidation'
import { useAddNewPostMutation } from '../../../api'
import { postFieldsData } from '../../fieldsData'
import { toast } from 'react-toastify'

import React from 'react'

const AddPost = () => {
  const [open, setOpen] = useState(false)
  const [addNewPost] = useAddNewPostMutation()

  const handleSubmitForm = async (values) => {
    try {
      const newPost = {
        date: new Date().toISOString(),
        ...values,
      }
      await addNewPost(newPost).unwrap()
      toast.success(`پست ${values.heading} با موفقیت ساخته شد`)

      setOpen(false)
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const postFields = {
    heading: '',
    introduction: '',
    thumbnail: '',
    category_id: '',
    tags: '',
    paragraphs: '',
  }
  const formik = useFormik({
    initialValues: postFields,
    validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm)
      resetForm()
    },
  })

  const fields = postFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت محصول جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن پست جدید"
          color="warning"
          imageUploader
          imageUploaderName="thumbnail"
        />
      </CustomModal>
    </>
  )
}

export default AddPost
