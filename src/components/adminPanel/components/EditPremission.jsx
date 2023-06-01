import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEditPremissionMutation } from '../../../api'

import { CustomModal, CustomForm } from '../../common'
import { premissionFieldsData } from '../../fieldsData'
import { premissionValidation } from '../../validations/premissionValidation.js'

const EditPremission = ({ premission }) => {
  const [open, setOpen] = useState(false)
  const [editPremission, { isSuccess }] = useEditPremissionMutation()

  const handleEditPremission = async (values) => {
    try {
      await editPremission(values).unwrap()

      if (isSuccess) {
        toast.success('با موفقیت ثبت شد')
      }
    } catch (error) {
      console.log(error)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }
  const formik = useFormik({
    initialValues: { ...premission },
    validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      handleEditPremission(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = premissionFieldsData(formik)
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

export default EditPremission
