import { CustomIconButton, CustomModal, CustomForm } from '../../common'
import { paragraphValidation } from '../../validations/postValidation'
import { useFormik } from 'formik'

import { Edit } from '@mui/icons-material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectParagraphById,
  paragraphUpdated,
} from '../../../reducers/paragraphSlice'
import { toast } from 'react-toastify'
import { paragraphFieldsData } from '../../fieldsData'
const EditParagraph = ({ patagraphId }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const paragraph = useSelector((state) =>
    selectParagraphById(state, patagraphId),
  )

  const paragraphFields = {
    ...paragraph,
  }
  const formik = useFormik({
    initialValues: paragraphFields,
    validationSchema: paragraphValidation,
    onSubmit: (values) => {
      dispatch(
        paragraphUpdated({
          id: patagraphId,
          changes: { ...values },
        }),
      )
      toast.success(`پاراگراف ${values.title} با موفقیت ویرایش شد`)
      setOpen(false)
    },
  })
  const fields = paragraphFieldsData(formik)
  return (
    <>
      <CustomIconButton
        title="ویرایش پاراگراف"
        color="info"
        icon={<Edit />}
        onClick={() => setOpen(true)}
      />

      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="success"
          label="ویرایش پاراگراف"
          imageUploader
          imageUploaderName="photo"
        />
      </CustomModal>
    </>
  )
}

export default EditParagraph
