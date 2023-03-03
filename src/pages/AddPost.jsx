import { Box, Stack } from '@mui/material'
import { CustomDivider, CustomForm } from '../components/common'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../components/validations/postValidation'
import AddParagraph from '../components/posts/addPost/AddParagraph'
import ShowParagraphs from '../components/posts/addPost/ShowParagraphs'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useAddNewPostMutation } from '../api'
import { useSelector } from 'react-redux'
import { selectAllParagraph } from '../reducers/paragraphSlice'
import { postFieldsData } from '../components/fields/data/postFieldsData'
const AddPost = () => {
  const paragraphs = useSelector(selectAllParagraph)

  const [addNewPost] = useAddNewPostMutation()
  const navigate = useNavigate()

  const handleSubmitForm = async (values) => {
    try {
      const newPost = {
        id: nanoid(),
        date: new Date().toISOString(),
        ...values,
      }
      await addNewPost(newPost).unwrap(), navigate('/')
    } catch (error) {
      console.error('Failed to save the post', error)
    }
  }

  const postFields = {
    heading: '',
    introduction: '',
    thumbnail: '',
    category: '',
    tags: '',
    paragraphs: [],
  }

  const formik = useFormik({
    initialValues: postFields,
    validationSchema: postValidation,
    onSubmit: (values) => {
      handleSubmitForm(values)
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
        color="success"
        imageUploader
        imageUploaderName="thumbnail"
      />
      <Stack sx={{ width: 1 }}>
        <CustomDivider label="پاراگراف های شما" color="info" />
        <AddParagraph /> <ShowParagraphs />
      </Stack>
    </Box>
  )
}

export default AddPost
