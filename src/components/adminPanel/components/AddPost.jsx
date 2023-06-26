import { CustomForm, CustomModal } from '../../common'
import { useState } from 'react'
import { useFormik } from 'formik'
import { postFieldsData } from '../../fieldsData'

import { useDispatch, useSelector } from 'react-redux'
import { addPost, selectPostDetails } from '../../../reducers/postSlice'
import { selectLang } from '../../../reducers/langSlice'
import { AddBtn } from '.'
import { selectAuth } from '../../../reducers/authSlice'

const AddPost = () => {
  const [open, setOpen] = useState(false)
  const { userInfo: user } = useSelector(selectAuth)
  const { access } = useSelector(selectPostDetails)
  const lang = useSelector(selectLang)
  const dispatch = useDispatch()

  const postFields = {
    name: '',
    description: '',
    image: null,
    category_id: '',
    user_id: user.id,
    status: 0,
    summary: '',
  }
  const formik = useFormik({
    initialValues: postFields,

    onSubmit: (values, { resetForm, setErrors }) => {
      dispatch(
        addPost({ values: { ...values, lang }, setOpen, resetForm, setErrors }),
      )
    },
  })

  const fields = postFieldsData(formik)
  const additionalFields = [
    { sm: 12, formik, name: 'description', textEditor: true },
  ]
  return (
    <>
      <AddBtn setOpen={setOpen} title="ساخت پست جدید" access={access} />

      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          additionalFields={additionalFields}
          label="افزودن پست جدید"
          color="warning"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 300 / 225 }}
        />
      </CustomModal>
    </>
  )
}

export default AddPost
