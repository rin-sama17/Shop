import { CustomForm, CustomModal } from '../../common'
import { useState } from 'react'
import { useFormik } from 'formik'
import { userFieldsData } from '../../fieldsData'

import { useDispatch, useSelector } from 'react-redux'
import { addUser, selectUserDetails } from '../../../reducers/userSlice'
import { selectLang } from '../../../reducers/langSlice'
import AddBtn from './AddBtn'

const AddUser = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const { access } = useSelector(selectUserDetails)
  const lang = useSelector(selectLang)

  const userFields = {
    name: '',
    description: '',
    image: '',
    category_id: '',
    tags: '',
    user_id: 1,
    summary: '',
  }
  const formik = useFormik({
    initialValues: userFields,
    onSubmit: (values, { resetForm, setErrors }) => {
      dispatch(
        addUser({ values: { ...values, lang }, setOpen, resetForm, setErrors }),
      )
    },
  })

  const fields = userFieldsData(formik)
  return (
    <>
      <AddBtn setOpen={setOpen} title="ساخت ادمین جدید" access={access} />

      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن ادمین جدید"
          color="warning"
        />
      </CustomModal>
    </>
  )
}

export default AddUser
