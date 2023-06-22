import { Button } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectLang } from '../../../reducers/langSlice'
import {
  addPremission,
  selectPremissionDetails,
} from '../../../reducers/premissionSlice'

import { CustomForm, CustomModal } from '../../common'
import { premissionFieldsData } from '../../fieldsData'
import { premissionValidation } from '../../validations/premissionValidation'
import AddBtn from './AddBtn'

const AddPremission = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const { access } = useSelector(selectPremissionDetails)
  const lang = useSelector(selectLang)

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      status: 0,
    },
    // validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addPremission({ values: { ...values, lang }, setOpen, resetForm }),
      )
    },
  })
  const fields = premissionFieldsData(formik)
  return (
    <>
      <AddBtn setOpen={setOpen} title="افزودن دسترسی جدید" access={access} />

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
