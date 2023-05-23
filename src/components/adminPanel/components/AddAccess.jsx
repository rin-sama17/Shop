import { Button } from '@mui/material'
import { gridDensityValueSelector } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAddAccessMutation } from '../../../api'

import { CustomForm, CustomModal } from '../../common'
import { accessFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const AddAccess = () => {
  const [open, setOpen] = useState(false)

  const [addAccess, { isSuccess }] = useAddAccessMutation()

  const handleSubmit = async (values) => {
    try {
      await addAccess(values).unwrap()
      if (isSuccess) {
        toast.success(`دسترسی ${values.title} با موفقیت اضافه شد`)
        setOpen(false)
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
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
  const fields = accessFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)}>افزودن دسترسی جدید</Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن دسترسی جدید"
        />
      </CustomModal>
    </>
  )
}

export default AddAccess
