import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import { editPremission } from '../../../reducers/premissionSlice'

import { CustomModal, CustomForm } from '../../common'
import { premissionFieldsData } from '../../fieldsData'

const EditPremission = ({ premission }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const formik = useFormik({
    initialValues: premission,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        editPremission({ values: { ...values, lang }, setOpen, resetForm }),
      )
    },
  })

  const fields = premissionFieldsData(formik)
  return (
    <>
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
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
