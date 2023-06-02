import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAddPremissionMutation } from '../../../api'

import { CustomForm, CustomModal } from '../../common'
import { premissionFieldsData } from '../../fieldsData'
import { premissionValidation } from '../../validations/premissionValidation'

const AddPremission = () => {
  const [open, setOpen] = useState(false)

  const [addPremission, { isSuccess }] = useAddPremissionMutation()

  const handleSubmit = async (values) => {
    try {
      await addPremission(values).unwrap()
      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
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
    validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = premissionFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} color="secondary" sx={{ m: 2 }}>
        افزودن دسترسی جدید
      </Button>
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

export default AddPremission
