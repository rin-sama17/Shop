import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import { selectAllPremissions } from '../../../reducers/premissionSlice'
import {
  addRole,
  premissionIdAdded,
  premissionIdsAdded,
  premissionIdDeleted,
  premissionIdsCleared,
  selectPremission_id,
  selectRoleDetails,
} from '../../../reducers/roleSlice'

import { CustomForm, CustomModal } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { AddBtn, selectAll } from '.'

const AddRole = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const allPremissionIds = premissions.map((p) => p.id)
  const premissionIds = useSelector(selectPremission_id)
  const { access } = useSelector(selectRoleDetails)
  const lang = useSelector(selectLang)

  const handleCheck = (e, premissionId) => {
    if (e.target.checked === true) {
      dispatch(premissionIdAdded(premissionId))
    } else {
      dispatch(premissionIdDeleted(premissionId))
    }
  }

  useEffect(() => {
    if (!open) {
      dispatch(premissionIdsCleared())
    }
  }, [open])
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: (values, { resetForm, setErrors }) => {
      const newRole = {
        ...values,
        premissions: premissionIds,
        lang,
      }
      dispatch(addRole({ values: newRole, setOpen, resetForm, setErrors }))
    },
  })
  const fields = roleFieldsData(formik)
  const extraFields = useMemo(() => {
    const selectAllField = selectAll({
      allItems: allPremissionIds,
      values: premissionIds,
      setFnc: premissionIdsAdded,
      clearFunc: premissionIdsCleared,
    })
    const chechBoxs = premissions?.map((premission) => ({
      xs: 3,
      checkbox: true,
      checked: Boolean(premissionIds.includes(premission.id)),
      formik,
      name: premission.name,
      customLabel: premission.name,
      onChange: (e) => handleCheck(e, premission.id),
    }))
    return [selectAllField, ...chechBoxs]
  }, [premissions, premissionIds])
  return (
    <>
      <AddBtn setOpen={setOpen} title="افزودن نقش جدید" access={access} />

      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن نقش جدید"
          extraFields={extraFields}
        />
      </CustomModal>
    </>
  )
}

export default AddRole
