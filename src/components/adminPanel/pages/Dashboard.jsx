import React from 'react'
import { useDispatch } from 'react-redux'
import { editUserInfo } from '../../../reducers/authSlice'
import { userFieldsData } from '../../fieldsData'
import { useFormik } from 'formik'
import { CustomForm } from '../../common'
const Dashboard = () => {
  const user = {
    id: 1,
    firstname: 'حامد',
    lastname: 'ممدی',
    email: 'jejf@gmail.com',
    phone: '09093939393',
  }
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: user,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editUserInfo({ values, setOpen, resetForm }))
    },
  })

  const fields = userFieldsData(formik)
  return (
    <CustomForm
      formik={formik}
      fields={fields}
      label="ویرایش اطلاعات"
      color="success"
    />
  )
}

export default Dashboard
