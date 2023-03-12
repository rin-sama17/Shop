import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAddNewAdminMutation } from '../../../api'

import { CustomForm, CustomModal } from '../../common'
import { adminFieldsData } from '../../fieldsData/adminFieldsData'
import { adminValidation } from '../../validations/adminValidation'

const AddAdmin = () => {
  const [open, setOpen] = useState(false)
  const [addNewAdmin] = useAddNewAdminMutation()

  const handleSubmit = async (values) => {
    try {
      const { fullName, phone, password } = values
      await addNewAdmin({
        id: nanoid(),
        fullName,
        phone,
        password,
      })
      setOpen(false)
      toast.success(`ادمین ${values.fullName} با موفقیت اضافه شد`)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      password: '',
    },
    validationSchema: adminValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      handleSubmit(values)
      resetForm()
    },
  })
  console.log(formik)
  const fields = adminFieldsData(formik)

  return (
    <>
      <Button onClick={() => setOpen(true)} color="success">
        افزودن ادمین جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن ادمین جدید"
          color="success"
        />
      </CustomModal>
    </>
  )
}

export default AddAdmin
