import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { CustomForm, CustomModal } from '../../common'
import { addContract } from '../../../reducers/contractSlice'
import { useDispatch } from 'react-redux'
const AddContract = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

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
      dispatch(addContract({ values, setOpen }))
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
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 5 / 3 }}
        />
      </CustomModal>
    </>
  )
}

export default AddContract
