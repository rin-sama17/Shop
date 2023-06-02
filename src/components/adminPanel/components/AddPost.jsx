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
  const [addNewPost, { isSuccess }] = useAddNewPostMutation()

  const handleSubmitForm = async (values) => {
    console.log(values)
    try {
      await addNewPost(values).unwrap()
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
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
  }
  const formik = useFormik({
    initialValues: postFields,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm)
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
