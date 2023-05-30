import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { useAddContractMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
const AddContract = () => {
  const [open, setOpen] = useState(false)
  const [addNewContract, { isSuccess }] = useAddContractMutation()

  const handleSubmit = async (values) => {
    try {
      await addNewContract(values)
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
      photo: '',
      address: '',
      phone: '',
      discription: '',
    },
    validationSchema: contractValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
    },
  })
  const fields = contractFieldsData(formik)
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }} color="secondary">
        ساخت نمایندگی جدید
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ساخت نمایندگی جدید"
          formik={formik}
          fields={fields}
          imageUploader
          imageUploaderName="photo"
          imageUploaderProps={{ aspect: 5 / 3 }}
        />
      </CustomModal>
    </>
  )
}

export default AddContract
