import { Button } from '@mui/material'
import { CustomForm, CustomModal, TextEditor } from '../../common'
import { useState } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../../validations/postValidation'
import { postFieldsData } from '../../fieldsData'
import { toast } from 'react-toastify'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../../reducers/postSlice'
import { selectLang } from '../../../reducers/langSlice'

const AddPost = () => {
  const [open, setOpen] = useState(false)

  const lang = useSelector(selectLang)

  const dispatch = useDispatch()

  const postFields = {
    name: '',
    description: '',
    image: null,
    category_id: '',
    tags: '',
    user_id: 1,
    summary: '',
    lang,
  }
  const formik = useFormik({
    initialValues: postFields,
    // validationSchema: postValidation,

    onSubmit: (values, { resetForm }) => {
      dispatch(addPost({ values, setOpen, resetForm }))
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
