import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useEditPremissionMutation } from '../../../api'
import { editPremission } from '../../../reducers/premissionSlice'

import { CustomModal, CustomForm } from '../../common'
import { premissionFieldsData } from '../../fieldsData'
import { premissionValidation } from '../../validations/premissionValidation.js'

const EditPremission = ({ premission }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: premission,
    validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editPremission({ values, setOpen }))
      resetForm()
    },
  })

  const fields = premissionFieldsData(formik)
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
          label="ویرایش دسترسی"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditPremission
