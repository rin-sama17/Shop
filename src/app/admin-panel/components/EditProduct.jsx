'use client'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '@/components/common'
import { productValidation } from '../validations/productValidation'
import { productFieldsData } from '../fieldsData'
import { useState } from 'react'
import { Edit } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'

const EditProduct = ({ product }) => {
  const [open, setOpen] = useState(false)
  const updateProduct = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/admin/products/update/${values.id}`
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
    initialValues: product,
    // validationSchema: productValidation,
    onSubmit: (values, { resetForm }) => {
      updateProduct(values)
      resetForm()
      setOpen(false)
    },
  })
  const fields = productFieldsData(formik)
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
          formik={formik}
          fields={fields}
          label="ویرایش محصول"
          color="warning"
          imageUploader
          imageUploaderName="thumbnail"
          imageUploaderProps={{ aspect: 3 / 4 }}
        />
      </CustomModal>
    </>
  )
}

export default EditProduct
