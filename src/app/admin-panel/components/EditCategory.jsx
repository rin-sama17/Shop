'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import { Edit } from '@mui/icons-material'

import { categoryValidation } from '../validations/categoryValidation'
import { CustomModal, CustomForm, CustomIconButton } from '@/components/common'
import { categoryFieldsData } from '../fieldsData'

const EditCategory = ({ category }) => {
  const [open, setOpen] = useState(false)

  const updateCategory = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/categories/update/${values.id}`
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
    initialValues: category,
    // validationSchema: categoryValidation,
    onSubmit: (values, { resetForm }) => {
      updateCategory(values)
      resetForm()
      setOpen(false)
    },
  })

  const fields = categoryFieldsData(formik)
  return (
    <>
      <CustomIconButton
        icon={<Edit />}
        color="info"
        label="ویرایش"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          label="ویرایش دسته بندی"
          formik={formik}
          fields={fields}
          color="info"
        />
      </CustomModal>
    </>
  )
}

export default EditCategory
