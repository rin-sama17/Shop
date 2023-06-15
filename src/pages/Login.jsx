import { useEffect, useState } from 'react'
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
import { useNavigate, Link } from 'react-router-dom'
import LoginMenu from '../components/login/LoginMenu'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token, userInfo, success } = useSelector(selectAuth)
  const { t } = useTranslation()
  useEffect(() => {
    if (token && success) {
      navigate('/admin-panel')
    }
  }, [token, success])

  const contactFieldNames = {
    phone: '',
    password: '',
  }
  const formik = useFormik({
    initialValues: contactFieldNames,
    // validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(login({ values, setOpen, resetForm, navigate }))
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
          title={t('ورود')}
        />
      )}
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          color="btnNav"
          label={t('ورود')}
        />
      </CustomModal>
    </>
  )
}
export default Login
