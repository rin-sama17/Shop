import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserInfo, selectAuth } from '../../../reducers/authSlice'
import { userFieldsData } from '../../fieldsData'
import { useFormik } from 'formik'
import { CustomDivider, CustomForm } from '../../common'
import { Chip } from '@mui/material'
const Dashboard = () => {
  const { userInfo } = useSelector(selectAuth)

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: userInfo,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editUserInfo({ values, resetForm }))
    },
  })

  const fields = userFieldsData(formik)
  return (
    <>
      <CustomForm
        formik={formik}
        fields={fields}
        label="ویرایش اطلاعات"
        color="success"
      />
    </>
  )
}

export default Dashboard
