import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  fetchPremissions,
  selectAllPremissions,
  selectPremissionIds,
} from '../../../reducers/premissionSlice'

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
import { roleValidation } from '../../validations/roleValidation'

const EditRole = ({ role }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const rolePremissions = useSelector(selectPremission_id)

  const handleCheck = (e, premissionId) => {
    if (e.target.checked === true) {
      dispatch(premissionIdAdded(premissionId))
    } else {
      dispatch(premissionIdDeleted(premissionId))
    }
  }

  useEffect(() => {
    dispatch(premissionsIdFinded(role))
  }, [role])

  useEffect(() => {
    dispatch(premissionsIdFinded())
  }, [role.id])

  useEffect(() => {
    if (!open) {
      dispatch(premissionIdsCleared())
    }
  }, [open])

  const formik = useFormik({
    initialValues: role,
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      const newRole = {
        ...values,
        premissions: rolePremissions,
      }
      console.log(newRole)
      dispatch(editRole({ values: newRole, setOpen, resetForm }))
    },
  })
  console.log(premissions)
  const fields = roleFieldsData(formik)
  const extraFields = premissions?.map((premission) => ({
    xs: 3,
    checkbox: true,
    formik,
    name: premission.name,
    customLabel: premission.name,
    onChange: (e) => handleCheck(e, premission.id),
  }))
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
          extraFields={extraFields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditRole
