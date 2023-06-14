import { useState } from 'react'
import { useFormik } from 'formik'
import { Button } from '@mui/material'

import { agencyValidation } from '../../validations/agencyValidation'
import { agencyFieldsData } from '../../fieldsData'
import { CustomForm, CustomModal } from '../../common'
import { addAgency } from '../../../reducers/agencySlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
const AddAgency = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const lang = useSelector(selectLang)

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      address: '',
      phone: '',
      email: '',
      lang,
    },
    // validationSchema: agencyValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(addAgency({ values, setOpen, resetForm }))
    },
  })
  const fields = agencyFieldsData(formik)
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

export default AddAgency
