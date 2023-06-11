import React from 'react'
import { useDispatch } from 'react-redux'
import { editUserInfo } from '../../../reducers/authSlice'
import { userFieldsData } from '../../fieldsData'
import { useFormik } from 'formik'
import { CustomDivider, CustomForm } from '../../common'
import { Chip } from '@mui/material'
const Dashboard = () => {
  const user = {
    id: 1,
    firstname: 'حامد',
    lastname: 'ممدی',
    email: 'jejf@gmail.com',
    phone: '09093939393',
    roles: [
      {
        id: 1,
        name: 'اشپزی 2ص',
        description: 'نحخنحخننحن',
        status: 0,
        created_at: '2023-06-10T15:22:03.000000Z',
        updated_at: '2023-06-10T15:44:30.000000Z',
        pivot: {
          user_id: 1,
          role_id: 1,
        },
      },
      {
        id: 1,
        name: 'اشپزی 2ص',
        description: 'نحخنحخننحن',
        status: 0,
        created_at: '2023-06-10T15:22:03.000000Z',
        updated_at: '2023-06-10T15:44:30.000000Z',
        pivot: {
          user_id: 1,
          role_id: 1,
        },
      },
      {
        id: 1,
        name: 'اشپزی 2ص',
        description: 'نحخنحخننحن',
        status: 0,
        created_at: '2023-06-10T15:22:03.000000Z',
        updated_at: '2023-06-10T15:44:30.000000Z',
        pivot: {
          user_id: 1,
          role_id: 1,
        },
      },
      {
        id: 1,
        name: 'اشپزی 2ص',
        description: 'نحخنحخننحن',
        status: 0,
        created_at: '2023-06-10T15:22:03.000000Z',
        updated_at: '2023-06-10T15:44:30.000000Z',
        pivot: {
          user_id: 1,
          role_id: 1,
        },
      },
    ],
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
    <>
      <CustomForm
        formik={formik}
        fields={fields}
        label="ویرایش اطلاعات"
        color="success"
      />
      {user.roles?.length > 0 && (
        <>
          <CustomDivider label="نقش های شما" />
          {user.roles.map((role) => (
            <Chip
              label={role.name}
              color="info"
              variant="outlined"
              sx={{ mr: 1 }}
            />
          ))}
        </>
      )}
    </>
  )
}

export default Dashboard
