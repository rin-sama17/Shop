import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { useEditContractMutation } from '../../../api/adminApi'
import { CustomForm, CustomModal } from '../../common'
const EditContract = ({ contract }) => {
  const [open, setOpen] = useState(false)
  const [editContract, { isSuccess }] = useEditContractMutation()

  const handleEditContract = async (values) => {
    try {
      await editContract(values).unwrap()

      if (isSuccess) {
        toast.success(`نمایندگی ${values.name} با موفقیت ویرایش شد`)
      }
      setOpen(false)
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: { ...contract },
    validationSchema: contractValidation,
    onSubmit: (values, { resetForm }) => {
      handleEditContract(values)
      resetForm()
    },
  })

  const fields = contractFieldsData(formik)
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
          label="ویرایش نمایندگی"
          formik={formik}
          fields={fields}
          color="info"
          imageUploader
          imageUploaderName="photo"
          imageUploaderProps={{ aspect: 4 / 3 }}
        />
      </CustomModal>
    </>
  )
}

export default EditContract
