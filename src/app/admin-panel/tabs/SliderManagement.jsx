'use client'

import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { nanoid } from '@reduxjs/toolkit'
import { Box } from '@mui/material'

import { HomeSlider } from '../../home'
import { SliderModal } from '../components'
import { sliderValidation } from '../../validations/sliderValidation'
import { CustomForm, CustomDivider } from '../../common'
import { sliderFieldsData } from '../../fieldsData'

const SliderManagement = () => {
  const createSlider = async (values) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/sliders/store`
      const res = await fetch(url, {
        method: 'POST',
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
    initialValues: { photo: '', link: '' },
    validationSchema: sliderValidation,
    onSubmit: (values, { resetForm }) => {
      createSlider(values)
      resetForm()
    },
  })
  const fields = sliderFieldsData(formik)
  return (
    <>
      <CustomForm
        formik={formik}
        fields={fields}
        label="اسلایدر جدید"
        color="warning"
        imageUploader
        imageUploaderName="photo"
        imageUploaderProps={{ md: 9, width: 1, aspect: 16 / 5 }}
      />

      <Box sx={{ my: 3 }}>
        <SliderModal />
      </Box>
      <Box sx={{ px: 3 }}>
        <CustomDivider label="پیش نمایش" />
        <HomeSlider />
      </Box>
    </>
  )
}

export default SliderManagement
