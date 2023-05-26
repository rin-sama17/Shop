import { useFormik } from 'formik'
import { postValidation } from '../../validations/postValidation'
import { useEditPostMutation } from '../../../api/adminApi'
import { toast } from 'react-toastify'
import { postFieldsData } from '../../fieldsData'
import { CustomModal, TextEditor, CustomForm } from '../../common'
import { useState } from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Edit } from '@mui/icons-material'

const EditPost = ({ post }) => {
  const [updatePost, { isSuccess }] = useEditPostMutation()
  const [open, setOpen] = useState(false)

  const handleSubmitForm = async (values, resetForm) => {
    try {
      await updatePost(values).unwrap()
      if (isSuccess) {
        toast.success(`پست ${values.heading} با موفقیت ویرایش شد`)
        setOpen(false)
        resetForm()
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }
  const formik = useFormik({
    initialValues: { ...post },
    validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm)
    },
  })

  const fields = postFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="ویرایش پست"
          color="success"
          imageUploader
          imageUploaderName="thumbnail"
          imageUploaderProps={{ aspect: 16 / 7 }}
        />
      </CustomModal>
    </>
  )
}

export default EditPost
