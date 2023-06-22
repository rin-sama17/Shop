import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import { editTag } from '../../../reducers/tagSlice'

import { CustomModal, CustomForm } from '../../common'
import { tagFieldData } from '../../fieldsData'
import { tagValidation } from '../../validations/tagValidation.js'

const EditTag = ({ tag }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const formik = useFormik({
    initialValues: tag,
    onSubmit: (values, { resetForm }) => {
      dispatch(editTag({ values: { ...values, lang }, setOpen, resetForm }))
    },
  })

  const fields = tagFieldData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش تگ"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditTag
