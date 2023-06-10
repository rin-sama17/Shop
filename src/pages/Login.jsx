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
import { useDispatch, useSelector } from 'react-redux'
import { login, selectAuth } from '../reducers/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { success, token } = useSelector(selectAuth)
  const contactFieldNames = {
    phone: '',
    password: '',
  }
  const formik = useFormik({
    initialValues: contactFieldNames,
    // validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(login({ values, setOpen, resetForm }))
      if (success && token) {
        navigate('/admin-panel')
      }
    },
  })

  const fields = loginFieldsData(formik)
  return (
    <>
      <CustomIconButton
        onClick={() => setOpen(true)}
        color="btnNav"
        icon={<Person />}
        title="ورود"
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="btnNav"
          label="ورود"
        />
      </CustomModal>
    </>
  )
}
export default Login
