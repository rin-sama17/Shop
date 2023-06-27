import { BookmarkAddRounded } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPremissions } from '../../../reducers/premissionSlice'

import {
  editUser,
  premissionIdAdded,
  premissionIdDeleted,
  premissionIdsCleared,
  premissionsIdFinded,
  selectPremission_id,
} from '../../../reducers/userSlice'
import { CustomModal, CustomForm } from '../../common'
import { selectLang } from '../../../reducers/langSlice'

const handleCheck = (dispatch, premissionId) => (e) => {
  if (e.target.checked === true) {
    dispatch(premissionIdAdded(premissionId))
  } else {
    dispatch(premissionIdDeleted(premissionId))
  }
}

const EditUserPremissions = ({ user }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const userPremissions = useSelector(selectPremission_id)
  const allPremissions = useSelector(selectAllPremissions)
  const lang = useSelector(selectLang)

  useEffect(() => {
    if (open) {
      dispatch(premissionsIdFinded(user.premissions))
    } else {
      dispatch(premissionIdsCleared())
    }
  }, [open])

  const formik = useFormik({
    initialValues: user,
    onSubmit: (values, { resetForm }) => {
      const roles = values.roles.map((role) => role.id)
      const newUser = {
        ...values,
        premissions: userPremissions,
        roles,
        lang,
      }
      dispatch(editUser({ values: newUser, setOpen, resetForm }))
    },
  })
  const extraFields = useMemo(() => {
    const premissionFields = allPremissions?.map((premission) => ({
      xs: 3,
      checkbox: true,
      formik,
      name: premission.name,
      customLabel: premission.name,
      defaultChecked: userPremissions.includes(premission.id),
      onChange: handleCheck(dispatch, premission.id),
    }))
    return [
      ...premissionFields,
      {
        submit: true,
        customLabel: 'ثبت',
      },
    ]
  }, [userPremissions, dispatch, open])
  return (
    <>
      <GridActionsCellItem
        icon={<BookmarkAddRounded />}
        color="success"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش دسترسی"
          formik={formik}
          extraFields={extraFields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditUserPremissions
