import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editUser } from '../../../reducers/userSlice'
import { CustomModal, CustomForm } from '../../common'
import { userFieldsData } from '../../fieldsData'
import { userValidation } from '../../validations/userValidation'

const EditUser = ({ user }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: user,
    // validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editUser({ values, setOpen, resetForm }))
    },
  })

  const fields = userFieldsData(formik)
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
          label="ویرایش ادمین"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditUser
