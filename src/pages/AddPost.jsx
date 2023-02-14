import {
  Button,
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Stack,
} from '@mui/material'
import {
  CustomDivider,
  SearchField,
  CustomFields,
  ImageUploader,
} from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../components/validations/postValidation'
import AddParagraph from '../components/posts/addPost/AddParagraph'
import { toast } from 'react-toastify'
import ShowParagraphs from '../components/posts/addPost/ShowParagraphs'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useAddNewPostMutation } from '../api'
import { useSelector } from 'react-redux'
import { selectAllParagraph } from '../reducers/postSlice'
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Triton',
  'Umbriel',
]

const AddPost = () => {
  const paragraphs = useSelector(selectAllParagraph)

  const [addNewPost] = useAddNewPostMutation()
  const navigate = useNavigate()

  const handleSubmitForm = async (values) => {
    try {
      const {
        heading,
        introduction,
        thumbnail,
        category,
        tags,
        paragraphs,
      } = values
      await addNewPost({
        id: nanoid(),
        date: new Date().toISOString(),
        heading,
        introduction,
        thumbnail,
        category,
        tags,
        paragraphs,
      }).unwrap(),
        navigate('/')
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
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <CustomDivider label="پست جدید" color="success" />
          <Grid
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ImageUploader
              formik={formik}
              name="thumbnail"
              color="success"
              size={200}
            />
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              <CustomFields
                sm={8}
                name="heading"
                formik={formik}
                label="عنوان"
              />
              <Grid xs={12} md={4}>
                <FormControl fullWidth size="small">
                  <InputLabel>دسته بندی</InputLabel>
                  <Select
                    name="category"
                    value={formik.values.category}
                    error={Boolean(
                      formik.touched.category && formik.errors.category,
                    )}
                    onChange={formik.handleChange}
                    label="دسته بندی"
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 48 * 4.5 + 8,
                          width: 250,
                        },
                      },
                    }}
                  >
                    <MenuItem>
                      <SearchField small />
                    </MenuItem>
                    {options.map((option, index) => (
                      <MenuItem value={option} key={index}>
                        {' '}
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>{' '}
              <CustomFields
                sm={12}
                name="tags"
                formik={formik}
                label="برچسب ها"
                helperText="برچسب ها را با / از هم جدا کنید"
                type="number"
                multiline
              />
              <CustomFields
                sm={12}
                name="introduction"
                formik={formik}
                multiline
                rows={4}
                label="مقدمه"
                type="text"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 2, color: 'black' }}
          >
            ارسال کن
          </Button>
        </Grid>
      </form>
      <Stack sx={{ width: 1 }}>
        <CustomDivider label="پاراگراف های شما" color="info" />
        <AddParagraph /> <ShowParagraphs />
      </Stack>
    </Box>
  )
}

export default AddPost
