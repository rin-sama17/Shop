import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { agencyValidation } from '../../validations/agencyValidation'
import { agencyFieldsData } from '../../fieldsData'
import { CustomForm, CustomModal } from '../../common'
import { editAgency } from '../../../reducers/agencySlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
const EditAgency = ({ agency }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const formik = useFormik({
    initialValues: agency,
    onSubmit: (values, { resetForm }) => {
      dispatch(editAgency({ values: { ...values, lang }, setOpen, resetForm }))
    },
  })

  const fields = agencyFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش نمایندگی"
          formik={formik}
          fields={fields}
          color="info"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 4 / 3 }}
        />
      </CustomModal>
    </>
  )
}

export default EditAgency
