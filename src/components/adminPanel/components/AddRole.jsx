import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectLang } from '../../../reducers/langSlice'
import {
  fetchPremissions,
  selectAllPremissions,
} from '../../../reducers/premissionSlice'
import {
  addRole,
  premissionIdAdded,
  premissionIdDeleted,
  premissionIdsCleared,
  selectPremission_id,
} from '../../../reducers/roleSlice'

import { CustomForm, CustomModal } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const AddRole = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const premissionIds = useSelector(selectPremission_id)
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
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm, setErrors }) => {
      const newRole = {
        ...values,
        premissions: premissionIds,
        lang,
      }
      console.log(newRole)
      dispatch(addRole({ values: newRole, setOpen, resetForm, setErrors }))
    },
  })
  console.log(formik.errors)
  const fields = roleFieldsData(formik)
  const extraFields = useMemo(
    () =>
      premissions?.map((premission) => ({
        xs: 3,
        checkbox: true,
        formik,
        name: premission.name,
        customLabel: premission.name,
        onChange: (e) => handleCheck(e, premission.id),
      })),
    [premissions],
  )
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary">
        افزودن نقش جدید
      </Button>
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
