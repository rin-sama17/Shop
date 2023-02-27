import { Button } from '@mui/material'
import {
  CustomDivider,
  CustomFields,
  ImageUploader,
} from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../components/validations/postValidation'
import AddParagraph from '../components/posts/addPost/AddParagraph'
import { useNavigate } from 'react-router-dom'
import { useEditPostMutation } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import {
  paragraphsRemoved,
  paragraphsSeted,
  selectAllParagraph,
} from '../reducers/paragraphSlice'
import ShowParagraphs from '../components/posts/addPost/ShowParagraphs'
import { toast } from 'react-toastify'

const EditPostFields = ({ post }) => {
  const dispatch = useDispatch()
  const [updatePost] = useEditPostMutation()

  const paragraphs = useSelector(selectAllParagraph)
  useEffect(() => {
    dispatch(paragraphsSeted(post.paragraphs))
  }, [])

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
      await updatePost({
        ...post,
        heading,
        introduction,
        thumbnail,
        category,
        tags,
        paragraphs,
      }).unwrap()
      toast.success(`پست ${values.heading} با موفقیت ویرایش شد`)
      dispatch(paragraphsRemoved())
      navigate('/')
    } catch (error) {
      console.error('Failed to save the post', error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }
  const formik = useFormik({
    initialValues: { ...post },
    validationSchema: postValidation,
    onSubmit: (values) => {
      handleSubmitForm(values)
    },
  })
  useEffect(() => {
    if (paragraphs.length > 0) {
      formik.setFieldValue('paragraphs', paragraphs)
    }
  }, [paragraphs])
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <CustomDivider label="ویرایش پست" color="success" />

          <ImageUploader formik={formik} name="thumbnail" color="success" />
          <Grid xs={12} md={9}>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              <CustomFields
                sm={8}
                name="heading"
                formik={formik}
                label="عنوان"
              />
              <CustomFields category name="category" formik={formik} md={4} />
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
      <CustomDivider label="ویرایش پاراگراف ها" color="success" />
      <AddParagraph /> <ShowParagraphs />
    </>
  )
}

export default EditPostFields
