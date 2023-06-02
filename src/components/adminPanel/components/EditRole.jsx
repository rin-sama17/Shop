import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { useEditRoleMutation } from '../../../api'
import { CustomModal, CustomForm } from '../../common'
import { roleFieldsData } from '../../fieldsData'
import { roleValidation } from '../../validations/roleValidation'

const EditRole = ({ role }) => {
  const [editRole] = useEditRoleMutation()
  const [open, setOpen] = useState(false)

  const handleSubmit = async (values) => {
    try {
      await editRole({ ...values }).unwrap()

      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...role },
    validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = roleFieldsData(formik)
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
          label="ویرایش نقش"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditRole