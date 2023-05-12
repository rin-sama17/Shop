import { useState } from 'react'
import { Person } from '@mui/icons-material'
import { useFormik } from 'formik'
import { loginValidation } from '../components/validations/loginValidation'
import {
  CustomFields,
  CustomForm,
  CustomIconButton,
  CustomModal,
} from '../components/common'
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
      <CustomIconButton
        onClick={() => setOpen(true)}
        color="buttons"
        icon={<Person />}
        title="ورود"
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="secondary"
          label="ورود"
        />
      </CustomModal>
    </>
  )
}
export default Login
