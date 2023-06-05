'use client'

import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useState } from 'react'

import { CustomModal, CustomForm } from '@/components/common'
import { premissionFieldsData } from '../fieldsData'
import { premissionValidation } from '../validations/premissionValidation.js'

const EditPremission = ({ premission }) => {
  const [open, setOpen] = useState(false)
  const updatePremission = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/premissions/update/${values.id}`
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
    initialValues: premission,
    // validationSchema: premissionValidation,
    onSubmit: (values, { resetForm }) => {
      updatePremission(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = premissionFieldsData(formik)
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
