import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEditAccessMutation } from '../../../api'

import { CustomModal, CustomForm } from '../../common'
import { accessFieldsData } from '../../fieldsData'
import { accessValidation } from '../../validations/accessValidation.js'

const EditAccess = ({ access }) => {
  const [open, setOpen] = useState(false)
  const [editAccess, { isSuccess }] = useEditAccessMutation()

  const handleEditAccess = async (values) => {
    try {
      await editAccess(values).unwrap()

      if (isSuccess) {
        toast.success(`دسترسی ${values.title} با موفقیت ویرایش شد`)
      }
      setOpen(false)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: { ...access },
    validationSchema: accessValidation,
    onSubmit: (values, { resetForm }) => {
      handleEditAccess(values)
      resetForm()
    },
  })

  const fields = accessFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش دسترسی"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditAccess
