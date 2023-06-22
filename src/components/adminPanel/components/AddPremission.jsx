import { Button, Chip } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectLang } from '../../../reducers/langSlice'
import {
  addPremission,
  selectPremissionDetails,
  tempPremissionAdded,
  tempPremissionDeleted,
} from '../../../reducers/premissionSlice'

import { CustomForm, CustomModal } from '../../common'
import { premissionFieldsData } from '../../fieldsData'
import { premissionValidation } from '../../validations/premissionValidation'
import AddBtn from './AddBtn'

const AddPremission = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const { access, tempPremission } = useSelector(selectPremissionDetails)
  const lang = useSelector(selectLang)

  const handleDelete = (premission) => {
    dispatch(tempPremissionDeleted(premission))
  }
  const handleAddToTemp = (values) => {
    dispatch(tempPremissionAdded(values))
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      // status: 0,
    },
    // validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      handleAddToTemp(values)
    },
  })

  const handleSubmit = () => {
    const arrayPremissions = tempPremission
    const singlePremission = formik.values
    if (
      singlePremission &&
      singlePremission.length > 0 &&
      !singlePremission.includes(arrayPremissions)
    ) {
      arrayPremissions.push(singlePremission)
    }
    console.log('arrayPremissions', arrayPremissions)
    dispatch(
      addPremission({
        values: { premission: arrayPremissions },
        setOpen,
      }),
    )
  }
  const fields = premissionFieldsData(formik)
  const extraFields = [
    {
      md: 12,
      submit: true,
      isBtn: true,
      onClick: () => handleSubmit(),
      customLabel: 'ثبت',
    },
  ]
  return (
    <>
      <AddBtn setOpen={setOpen} title="افزودن دسترسی جدید" access={access} />

      <CustomModal open={open} setOpen={setOpen}>
        {tempPremission?.map((premission) => (
          <Chip
            label={premission.name}
            variant="outlined"
            sx={{ m: 0.4 }}
            onDelete={() => handleDelete(premission)}
          />
        ))}
        <CustomForm
          formik={formik}
          fields={fields}
          extraFields={extraFields}
          label="افزودن دسترسی جدید"
        />
      </CustomModal>
    </>
  )
}

export default AddPremission
