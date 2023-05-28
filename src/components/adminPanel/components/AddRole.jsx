import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAddRoleMutation } from '../../../api'

import { CustomForm, CustomModal } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const AddRole = () => {
  const [open, setOpen] = useState(false)

  const [addRole, { isSuccess }] = useAddRoleMutation()
  const handleSubmit = async (values) => {
    try {
      console.log(values)

      await addRole({
        status: 1,
        ...values,
      })
      if (isSuccess) {
        toast.success(`نقش ${values.title} با موفقیت اضافه شد`)
        setOpen(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      details: '',
    },
    validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
    },
  })
  const fields = roleFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)}>افزودن نقش جدید</Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm formik={formik} fields={fields} label="افزودن نقش جدید" />
      </CustomModal>
    </>
  )
}

export default AddRole
