import { Box, Stack } from '@mui/material'
import { CustomDivider, CustomForm, TextEditor } from '../components/common'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../components/validations/postValidation'
import { AddParagraph, ShowParagraphs } from '../components/posts'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useAddNewPostMutation } from '../api'
import { useSelector } from 'react-redux'
import { selectAllParagraph } from '../reducers/paragraphSlice'
import { postFieldsData } from '../components/fieldsData'
import { toast } from 'react-toastify'

import React from 'react'

import ReactQuill from 'react-quill'
const AddPost = () => {
  const paragraphs = useSelector(selectAllParagraph)
  const [value, setValue] = useState('')
  const [addNewPost] = useAddNewPostMutation()
  const navigate = useNavigate()

  const handleSubmitForm = async (values, resetForm) => {
    try {
      const newPost = {
        id: nanoid(),
        date: new Date().toISOString(),
        ...values,
      }
      await addNewPost(newPost).unwrap()
      toast.success(`پست ${values.heading} با موفقیت ساخته شد`)

      navigate(-1)
      console.log(values)
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const postFields = {
    heading: '',
    introduction: '',
    thumbnail: '',
    category: '',
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
  console.log(formik.values)

  useEffect(() => {
    formik.setFieldValue('paragraphs', paragraphs)
  }, [paragraphs])

  const fields = postFieldsData(formik)
  return (
    <Box
      sx={{
        px: 3,
        py: 3,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <CustomForm
        formik={formik}
        fields={fields}
        label="افزودن پست جدید"
        color="warning"
        imageUploader
        imageUploaderName="thumbnail"
      />
      <TextEditor formik={formik} name="paragraphs" />
    </Box>
  )
}

export default AddPost
