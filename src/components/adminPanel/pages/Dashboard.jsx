import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserInfo, selectAuth } from '../../../reducers/authSlice'
import { userFieldsData } from '../../fieldsData'
import { useFormik } from 'formik'
import { CustomDivider, CustomForm, Spinner } from '../../common'
import { Chip } from '@mui/material'
const Dashboard = () => {
  const { userInfo, loading } = useSelector(selectAuth)

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: userInfo,
    // validationSchema: postValidation,
    onSubmit: (values, { resetForm }) => {
      const roleIds = values.roles.map((role) => role.id)
      const updatedUser = {
        ...values,
        roles: roleIds,
      }
      dispatch(editUserInfo({ values: updatedUser, resetForm }))
    },
  })

  const fields = useMemo(() => userFieldsData(formik), [
    userInfo,
    loading,
    formik,
  ])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <CustomForm
          formik={formik}
          fields={fields}
          label="ویرایش اطلاعات"
          color="success"
        />
      )}
    </>
  )
}

export default Dashboard
