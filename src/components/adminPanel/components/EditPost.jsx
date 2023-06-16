import { useFormik } from 'formik'
import { postValidation } from '../../validations/postValidation'
import { toast } from 'react-toastify'
import { postFieldsData } from '../../fieldsData'
import { CustomModal, TextEditor, CustomForm } from '../../common'
import { useState } from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Edit } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { editPost } from '../../../reducers/postSlice'
import { selectLang } from '../../../reducers/langSlice'

const EditPost = ({ post }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const formik = useFormik({
    initialValues: post,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editPost({ values: { ...values, lang }, setOpen, resetForm }))
    },
  })

  const fields = postFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="ویرایش پست"
          color="success"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 16 / 7 }}
        />
      </CustomModal>
    </>
  )
}

export default EditPost
