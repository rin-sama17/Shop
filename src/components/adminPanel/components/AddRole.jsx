import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useAddRoleMutation } from '../../../api'
import { addRole } from '../../../reducers/roleSlice'

import { CustomForm, CustomModal } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const AddRole = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addRole({ values, setOpen }))
      resetForm()
    },
  })

  const fields = roleFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary">
        افزودن نقش جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm formik={formik} fields={fields} label="افزودن نقش جدید" />
      </CustomModal>
    </>
  )
}

export default AddRole
