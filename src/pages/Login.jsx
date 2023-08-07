import { useEffect, useState } from 'react'
import { Person } from '@mui/icons-material'
import { useFormik } from 'formik'
import { CustomForm, CustomIconButton, CustomModal } from '../components/common'
import { loginFieldsData } from '../components/fieldsData/loginFieldsData'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectAuth } from '../reducers/authSlice'
import { useNavigate } from 'react-router-dom'
import LoginMenu from '../components/login/LoginMenu'
import { selectLang } from '../reducers/langSlice'

const Login = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const lang = useSelector(selectLang)
  const { token, userInfo } = useSelector(selectAuth)

  const contactFieldNames = {
    phone: '',
    password: '',
  }
  const formik = useFormik({
    initialValues: contactFieldNames,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        login({ values: { ...values, lang }, setOpen, resetForm, navigate }),
      )
    },
  })

  const fields = loginFieldsData(formik)
  return (
    <>
      {token ? (
        <LoginMenu user={userInfo} />
      ) : (
        <CustomIconButton
          onClick={() => setOpen(true)}
          color="btnNav"
          icon={<Person />}
          title="ورود"
        />
      )}
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
