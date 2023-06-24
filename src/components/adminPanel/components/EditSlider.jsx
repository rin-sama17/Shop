import { Edit, Wallpaper } from '@mui/icons-material'
import { Checkbox, FormControlLabel } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import { editSlider } from '../../../reducers/sliderSlice'

import { CustomForm, CustomModal } from '../../common'
import { sliderFieldsData } from '../../fieldsData'

const EditSlider = ({ slider }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState()

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  useEffect(() => {
    const sliderType = slider.type
    return setType(sliderType)
  }, [])
  const handleSubmit = (values, resetForm) => {
    let newSlider
    if (type == 0) {
      newSlider = {
        ...values,
        description: 'just a text',
      }
    } else {
      newSlider = values
    }
    dispatch(editSlider({ values: { ...newSlider, lang }, setOpen, resetForm }))
  }
  const formik = useFormik({
    initialValues: slider,
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
      <GridActionsCellItem
        icon={<Edit />}
        color="info"
        onClick={() => setOpen(true)}
      />
      <CustomModal open={open} setOpen={setOpen}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<Wallpaper />}
              checked={Boolean(type == 1)}
              onChange={handleChange}
            />
          }
          label="اسلایدر اینه ای"
        />
        <CustomForm
          formik={formik}
          fields={fields}
          label="ویرایش اسلایدر"
          color="success"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: type === 0 ? 1080 / 350 : 1 / 1 }}
        />
      </CustomModal>
    </>
  )
}

export default EditSlider
