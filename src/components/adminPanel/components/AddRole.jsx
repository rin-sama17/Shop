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

  const [addRole] = useAddRoleMutation()
  const handleSubmit = (values) => {
    try {
      addRole(values)
      toast.success(`نقش ${values.title} با موفقیت اضافه شد`)
      setOpen(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      details: '',
      addPost: false,
      editPost: false,
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
