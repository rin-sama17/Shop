import { Button, Checkbox, FormControlLabel } from '@mui/material'
import { Wallpaper } from '@mui/icons-material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { sliderValidation } from '../../validations/sliderValidation'
import { sliderFieldsData } from '../../fieldsData'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSlider } from '../../../reducers/sliderSlice'
import { selectLang } from '../../../reducers/langSlice'
import AddBtn from './AddBtn'

const AddSlider = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const lang = useSelector(selectLang)
  const [type, setType] = useState(0)
  const handleSubmit = (values, resetForm) => {
    const { name, description, image, url } = values
    let newSlider
    if (type === 0) {
      newSlider = {
        ...values,
        description: 'just a text',
      }
    } else {
      newSlider = values
    }
    dispatch(addSlider({ values: { ...newSlider, lang }, setOpen, resetForm }))
  }
  const sliderFieldNames = {
    name: '',
    description: '',
    image: null,
    url: '',
  }
  const formik = useFormik({
    initialValues: sliderFieldNames,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm)
    },
  })
  const fields = sliderFieldsData(formik, type)
  const handleChange = (event) => {
    if (event.target.checked) {
      setType(1)
    } else {
      setType(0)
    }
  }

  return (
    <>
      <AddBtn title="ساخت اسلایدر جدید" setOpen={setOpen} />

      <CustomModal open={open} setOpen={setOpen}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<Wallpaper />}
              checked={Boolean(type === 1)}
              onChange={handleChange}
            />
          }
          label="اسلایدر اینه ای"
        />
        <CustomForm
          formik={formik}
          fields={fields}
          label="ساخت اسلایدر جدید"
          color="warning"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: type === 0 ? 3 / 1.1 : 1 / 1 }}
        />
      </CustomModal>
    </>
  )
}

export default AddSlider
