import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { useAddContractMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
const AddContract = () => {
  const [open, setOpen] = useState(false)
  const [addNewContract, { isSuccess, error }] = useAddContractMutation()
  console.log(error)
  const handleSubmit = async (values) => {
    try {
      await addNewContract(values).unwrap()
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
      name: '',
      image: '',
      address: '',
      phone: '',
      email: '',
      discription: '',
    },
    // validationSchema: contractValidation,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
      setOpen(false)
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
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 5 / 3 }}
        />
      </CustomModal>
    </>
  )
}

export default AddContract
