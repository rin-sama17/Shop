import { useFormik } from 'formik'
import { postFieldsData } from '../../fieldsData'
import { CustomModal, CustomForm } from '../../common'
import { useState, useEffect } from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Edit } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { editPost } from '../../../reducers/postSlice'
import { selectLang } from '../../../reducers/langSlice'
import {
  selectTag_id,
  tagIdsCleared,
  tagsIdFinded,
} from '../../../reducers/tagSlice'

const EditPost = ({ post }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const tag_id = useSelector(selectTag_id)
  const tagIds = tag_id.map((tag) => tag.id)

  useEffect(() => {
    if (open) {
      dispatch(tagsIdFinded(post.tags))
    } else {
      dispatch(tagIdsCleared())
    }
  }, [open])
  const formik = useFormik({
    initialValues: post,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        editPost({
          values: { ...values, tags: tagIds, lang },
          setOpen,
          resetForm,
        }),
      )
    },
  })
  const fields = postFieldsData(formik, true)
  const additionalFields = [
    { sm: 12, formik, name: 'description', textEditor: true },
  ]
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
          additionalFields={additionalFields}
          label="ویرایش پست"
          color="success"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 300 / 225 }}
        />
      </CustomModal>
    </>
  )
}

export default EditPost
