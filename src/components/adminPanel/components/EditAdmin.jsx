import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { useEditAdminMutation } from '../../../api'
import { CustomModal, CustomForm } from '../../common'
import { adminFieldsData } from '../../fieldsData/adminFieldsData'
import { adminValidation } from '../../validations/adminValidation'

const EditAdmin = ({ admin }) => {
  const [editAdmin] = useEditAdminMutation()
  const [open, setOpen] = useState(false)

  const handleSubmit = async (values) => {
    try {
      await editAdmin({ ...values })
      toast.success(`اطلاعات ${values.fullName} با موفقیت ویرایش شد`)
      setOpen(false)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: { ...admin },
    validationSchema: adminValidation,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })

  const fields = adminFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="primary"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش ادمین"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditAdmin
