import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUserInfo } from '../../../reducers/authSlice'
import { userFieldsData } from '../../fieldsData'
import { useFormik } from 'formik'
import { CustomForm } from '../../common'
import { selectLang } from '../../../reducers/langSlice'
const EditUserInfo = ({ userInfo }) => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const formik = useFormik({
    initialValues: userInfo,
    onSubmit: (values, { resetForm }) => {
      const roleIds = values.roles.map((role) => role.id)
      let updatedUser
      const {
        id,
        firstname,
        lastname,
        phone,
        email,
        email_verified_at,
        token,
        created_at,
        updated_at,
      } = values
      if (!values.password || values.password === '') {
        updatedUser = {
          id,
          firstname,
          lastname,
          phone,
          email,
          email_verified_at,
          token,
          created_at,
          updated_at,
          roles: roleIds,
        }
      } else {
        updatedUser = {
          ...values,
          lang,
          roles: roleIds,
        }
      }
      dispatch(editUserInfo({ values: updatedUser, resetForm }))
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

export default EditUserInfo
