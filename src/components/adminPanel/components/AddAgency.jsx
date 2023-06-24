import { useState } from 'react'
import { useFormik } from 'formik'

import { agencyFieldsData } from '../../fieldsData'
import { CustomForm, CustomModal } from '../../common'
import { addAgency, selectAgencyDetails } from '../../../reducers/agencySlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import AddBtn from './AddBtn'
const AddAgency = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { access } = useSelector(selectAgencyDetails)

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      address: '',
      phone: '',
      email: '',
      description: '',
    },
    onSubmit: (values, { resetForm, setErrors }) => {
      dispatch(
        addAgency({
          values: {
            ...values,
            lang,
          },
          setOpen,
          resetForm,
          setErrors,
        }),
      )
    },
  })
  const fields = agencyFieldsData(formik)
  return (
    <>
      <AddBtn setOpen={setOpen} title="ساخت نمایندگی جدید" access={access} />
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
