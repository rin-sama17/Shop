import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPremissions } from '../../../reducers/premissionSlice'

import {
  editRole,
  premissionIdAdded,
  premissionIdDeleted,
  premissionIdsCleared,
  premissionsIdFinded,
  selectPremission_id,
} from '../../../reducers/roleSlice'
import { CustomModal, CustomForm } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { selectLang } from '../../../reducers/langSlice'

const handleCheck = (dispatch, premissionId) => (e) => {
  if (e.target.checked === true) {
    dispatch(premissionIdAdded(premissionId))
  } else {
    dispatch(premissionIdDeleted(premissionId))
  }
}

const EditRole = ({ role }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const rolePremissions = useSelector(selectPremission_id)
  const allPremissions = useSelector(selectAllPremissions)
  const lang = useSelector(selectLang)

  useEffect(() => {
    if (open) {
      dispatch(premissionsIdFinded(role.premissions))
    } else {
      dispatch(premissionIdsCleared())
    }
  }, [open])

  const formik = useFormik({
    initialValues: role,
    onSubmit: (values, { resetForm }) => {
      const newRole = {
        ...values,
        premissions: rolePremissions,
        lang,
      }
      dispatch(editRole({ values: newRole, setOpen, resetForm }))
    },
  })
  const fields = useMemo(() => roleFieldsData(formik), [formik])
  const extraFields = useMemo(() => {
    return allPremissions?.map((premission) => ({
      xs: 3,
      checkbox: true,
      formik,
      name: premission.name,
      customLabel: premission.name,
      defaultChecked: rolePremissions.includes(premission.id),
      onChange: handleCheck(dispatch, premission.id),
    }))
  }, [rolePremissions, dispatch, open])
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش نقش"
          formik={formik}
          fields={fields}
          extraFields={extraFields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditRole
