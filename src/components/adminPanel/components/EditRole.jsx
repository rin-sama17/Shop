import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  fetchPremissions,
  selectAllPremissions,
} from '../../../reducers/premissionSlice'

import { editRole } from '../../../reducers/roleSlice'
import { CustomModal, CustomForm } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const EditRole = ({ role }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  useEffect(() => {
    dispatch(fetchPremissions())
  }, [])
  const formik = useFormik({
    initialValues: role,
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editRole({ values, setOpen, resetForm }))
    },
  })
  console.log(role.premissions)
  const fields = roleFieldsData(formik)
  const extraFields = useMemo(
    () =>
      premissions?.map((premission) => ({
        xs: 3,
        checkbox: true,
        checked: role.premissions.includes(premission.id),
        formik,
        name: premission.name,
        customLabel: premission.name,
        onChange: (e) => handleCheck(e, premission.id),
      })),
    [role],
  )
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
