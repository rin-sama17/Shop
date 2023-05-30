import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAddRoleMutation } from '../../../api'

import { CustomForm, CustomModal } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const AddRole = () => {
  const [open, setOpen] = useState(false)

  const [addRole, isSuccess] = useAddRoleMutation()
  const handleSubmit = async (values) => {
    try {
      await addRole({
        status: 1,
        lang: 'fa',
        ...values,
      })
      if (isSuccess) {
        setOpen(false)
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
      // setOpen(flase)
    },
  })

  const fields = roleFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary">
        افزودن نقش جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm formik={formik} fields={fields} label="افزودن نقش جدید" />
      </CustomModal>
    </>
  )
}

export default AddRole
