import { Button } from '@mui/material'
import { CustomForm, CustomModal } from '../../common'
import { useState } from 'react'
import { useFormik } from 'formik'
import { userFieldsData } from '../../fieldsData'

import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../reducers/userSlice'

const AddUser = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const userFields = {
    name: '',
    description: '',
    image: '',
    category_id: '',
    tags: '',
    user_id: 1,
    summary: '',
  }
  const formik = useFormik({
    initialValues: userFields,
    // validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addUser({ values, setOpen }))
      resetForm()
    },
  })

  const fields = userFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت ادمین جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن ادمین جدید"
          color="warning"
        />
      </CustomModal>
    </>
  )
}

export default AddUser
