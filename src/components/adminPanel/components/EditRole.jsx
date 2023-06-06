import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { useEditRoleMutation } from '../../../api'
import { editRole } from '../../../reducers/roleSlice'
import { CustomModal, CustomForm } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const EditRole = ({ role }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: role,
    validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editRole({ values, setOpen }))
      resetForm()
    },
  })

  const fields = roleFieldsData(formik)
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
          label="ویرایش نقش"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditRole
