'use client'

import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'

import { agencyValidation } from '../validations/agencyValidation'
import { agencyFieldsData } from '../fieldsData'
import { CustomForm, CustomModal } from '@/components/common'

const EditAgency = ({ agency }) => {
  const [open, setOpen] = useState(false)
  const updateAgency = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/agencies/update/${values.id}`
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: values,
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
    }
  }
  const formik = useFormik({
    initialValues: agency,
    // validationSchema: agencyValidation,
    onSubmit: (values, { resetForm }) => {
      updateAgency(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = agencyFieldsData(formik)
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

export default EditAgency
