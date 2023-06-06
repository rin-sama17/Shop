import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { contractValidation } from '../../validations/contractValidation'
import { contractFieldsData } from '../../fieldsData'
import { useEditContractMutation } from '../../../api'
import { CustomForm, CustomModal } from '../../common'
import { editContract } from '../../../reducers/contractSlice'
import { useDispatch } from 'react-redux'
const EditContract = ({ contract }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: contract,
    // validationSchema: contractValidation,
    onSubmit: (values, { resetForm }) => {
      dispatch(editContract({ values, setOpen }))
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
