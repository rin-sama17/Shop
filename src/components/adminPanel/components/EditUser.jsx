import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoles, selectAllRoles } from '../../../reducers/roleSlice'

import {
  editUser,
  roleIdAdded,
  roleIdDeleted,
  roleIdsCleared,
  rolesIdFinded,
  selectRoleIds,
} from '../../../reducers/userSlice'
import { CustomModal, CustomForm } from '../../common'
import { userFieldsData } from '../../fieldsData'
import { userValidation } from '../../validations/userValidation'

const handleCheck = (dispatch, roleId) => (e) => {
  if (e.target.checked === true) {
    dispatch(roleIdAdded(roleId))
  } else {
    dispatch(roleIdDeleted(roleId))
  }
}

const EditUser = ({ user }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const roles = useSelector(selectAllRoles)
  const userRoleIds = useSelector(selectRoleIds)
  useEffect(() => {
    if (!open) {
      dispatch(roleIdsCleared())
    }
  }, [dispatch, open])
  useEffect(() => {
    dispatch(fetchRoles())
  }, [])
  const formik = useFormik({
    initialValues: user,
    // validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      const editedUser = {
        ...values,
        role: userRoleIds,
      }
      console.log(editedUser)
      dispatch(editUser({ values: editedUser, setOpen, resetForm }))
    },
  })

  const fields = userFieldsData(formik)
  const extraFields = useMemo(() => {
    return roles?.map((role) => ({
      xs: 3,
      checkbox: true,
      formik,
      name: role.name,
      customLabel: role.name,
      onChange: handleCheck(dispatch, role.id),
    }))
  }, [roles])
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
          extraFields={extraFields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditUser
