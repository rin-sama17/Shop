import { Box, Stack } from '@mui/material'
import { CustomDivider, CustomForm } from '../components/common'
import { useEffect } from 'react'
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

import { useQuill } from 'react-quilljs'
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css' // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const AddPost = () => {
  const { quill, quillRef } = useQuill()

  console.log(quill) // undefined > Quill Object
  console.log(quillRef) // { current: undefined } > { current: Quill Editor Reference }

  const paragraphs = useSelector(selectAllParagraph)

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
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const postFields = {
    heading: '',
    thumbnail: '',
    category: '',
    tags: '',
    paragraphs: [],
  }

  const formik = useFormik({
    initialValues: postFields,
    validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm)
      resetForm()
    },
  })

  useEffect(() => {
    formik.setFieldValue('paragraphs', paragraphs)
  }, [paragraphs])

  const fields = postFieldsData(formik)
  return (
    <Box
      sx={{
        width: 1,
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
      <Box
        sx={{
          width: 1,
          direction: 'ltr',
          mb: 10,
          mt: 3,
          bgcolor: '#FFFF',
        }}
      >
        <div ref={quillRef} />
      </Box>
    </Box>
  )
}

export default AddPost
