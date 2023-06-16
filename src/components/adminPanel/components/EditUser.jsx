import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
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
  const lang = useSelector(selectLang)

  useEffect(() => {
    if (open) {
      console.log(user.roles)

      dispatch(rolesIdFinded(user.roles))
    } else {
      dispatch(roleIdsCleared())
    }
  }, [open])

  const formik = useFormik({
    initialValues: user,
    // validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      const editedUser = {
        ...values,
        roles: userRoleIds,
        lang,
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
      defaultChecked: userRoleIds.includes(role.id),
      onChange: handleCheck(dispatch, role.id),
    }))
  }, [roles, userRoleIds])
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
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
