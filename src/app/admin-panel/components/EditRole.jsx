'use client'

import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'

import { CustomModal, CustomForm } from '@/components/common'
import { roleFieldsData } from '../fieldsData'
import { roleValidation } from '../validations/roleValidation'

const EditRole = ({ role }) => {
  const [open, setOpen] = useState(false)
  const updateRole = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/roles/update/${values.id}`
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
    initialValues: role,
    // validationSchema: roleValidation,
    onSubmit: (values, { resetForm }) => {
      updateRole(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = roleFieldsData(formik)
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
          label="ویرایش نقش"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditRole
