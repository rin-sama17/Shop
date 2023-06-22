import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { productValidation } from '../../validations/productValidation'
import { toast } from 'react-toastify'
import { productFieldsData } from '../../fieldsData'
import { useState, useEffect } from 'react'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { editProduct } from '../../../reducers/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import {
  fetchTags,
  selectTag_id,
  tagIdsCleared,
  tagsIdFinded,
} from '../../../reducers/tagSlice'
import ChangeStatus from './ChangeStatus'

const EditProduct = ({ product }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const tag_ids = useSelector(selectTag_id)
  const tagIds = tag_ids.map((tag) => tag.id)

  useEffect(() => {
    dispatch(fetchTags())
  }, [])

  useEffect(() => {
    if (open) {
      dispatch(tagsIdFinded(product.tags))
    } else {
      dispatch(tagIdsCleared())
    }
  }, [open])

  const formik = useFormik({
    initialValues: { ...product, tags: [] },
    onSubmit: (values, { resetForm }) => {
      const editedProduct = { ...values, tags: tagIds, lang }
      console.log(editedProduct)
      dispatch(
        editProduct({
          values: editedProduct,
          setOpen,
          resetForm,
        }),
      )
    },
  })
  const fields = productFieldsData(formik, true)
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
          label="ویرایش محصول"
          color="warning"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 3 / 4 }}
        />
      </CustomModal>
    </>
  )
}

export default EditProduct
