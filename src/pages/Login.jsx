import { IconButton } from '@mui/material'

import { useState } from 'react'
import { toast } from 'react-toastify'
import Grid from '@mui/material/Unstable_Grid2'
import { Face, AccountCircle } from '@mui/icons-material'
import { useFormik } from 'formik'
import { loginValidation } from '../components/validations/loginValidation'
import { CustomFields, CustomForm, CustomModal } from '../components/common'
import { useGetAdminsQuery } from '../api'
import { createSelector } from '@reduxjs/toolkit'
import { loginFieldsData } from '../components/fieldsData/loginFieldsData'

const Login = () => {
  const [open, setOpen] = useState(false)

  const contactFieldNames = {
    phone: '',
    password: '',
  }
  const formik = useFormik({
    initialValues: contactFieldNames,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })

  const fields = loginFieldsData(formik)
  return (
    <>
      <IconButton onClick={() => setOpen(true)} color="secondary">
        <AccountCircle />
      </IconButton>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="success"
          label="ورود"
        />
      </CustomModal>
    </>
  )
}
export default Login
