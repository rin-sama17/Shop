import { CustomDivider, CustomForm } from '../common'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import { postValidation } from '../validations/postValidation'
import { useNavigate } from 'react-router-dom'
import { useEditPostMutation } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import {
  paragraphsRemoved,
  paragraphsSeted,
  selectAllParagraph,
} from '../../reducers/paragraphSlice'
import { ShowParagraphs, AddParagraph } from '.'
import { toast } from 'react-toastify'
import { postFieldsData } from '../fieldsData'

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
      const editedPost = {
        ...post,
        ...values,
      }
      await updatePost(editedPost).unwrap()
      toast.success(`پست ${values.heading} با موفقیت ویرایش شد`)
      dispatch(paragraphsRemoved())
      navigate('/')
    } catch (error) {
      console.log(error)
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

  const fields = postFieldsData(formik)
  return (
    <>
      <CustomForm
        formik={formik}
        fields={fields}
        label="ویرایش پست"
        color="success"
        imageUploader
        imageUploaderName="thumbnail"
      />
      <CustomDivider label="ویرایش پاراگراف ها" color="success" />
      <AddParagraph /> <ShowParagraphs />
    </>
  )
}

export default EditPostFields
