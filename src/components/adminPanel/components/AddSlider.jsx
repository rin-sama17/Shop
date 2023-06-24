import { Checkbox, FormControlLabel } from '@mui/material'
import { Wallpaper } from '@mui/icons-material'

import { useFormik } from 'formik'
import { CustomForm, CustomModal } from '../../common'
import { sliderFieldsData } from '../../fieldsData'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSlider, selectSliderDetails } from '../../../reducers/sliderSlice'
import { selectLang } from '../../../reducers/langSlice'
import AddBtn from './AddBtn'
import { useTranslation } from 'react-i18next'

const AddSlider = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const lang = useSelector(selectLang)
  const { access } = useSelector(selectSliderDetails)
  const [type, setType] = useState(0)
  const handleSubmit = (values, resetForm, setErrors) => {
    const { name, image, url } = values
    let newSlider
    if (type === 0) {
      newSlider = {
        name,
        image,
        url,
        type,
        description: 'just e text',
      }
    } else {
      newSlider = { ...values, type }
    }
    dispatch(
      addSlider({
        values: { ...newSlider, lang },
        setOpen,
        resetForm,
        setErrors,
      }),
    )
  }
  const sliderFieldNames = {
    name: '',
    description: '',
    image: null,
    url: '',
  }
  const formik = useFormik({
    initialValues: sliderFieldNames,
    onSubmit: (values, { resetForm, setErrors }) => {
      handleSubmit(values, resetForm, setErrors)
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
      <AddBtn title="ساخت اسلایدر جدید" setOpen={setOpen} access={access} />

      <CustomModal open={open} setOpen={setOpen}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<Wallpaper />}
              checked={Boolean(type === 1)}
              onChange={handleChange}
            />
          }
          label={t('اسلایدر اینه ای')}
        />
        <CustomForm
          formik={formik}
          fields={fields}
          label="ساخت اسلایدر جدید"
          color="warning"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: type === 0 ? 1080 / 350 : 1 / 1 }}
        />
      </CustomModal>
    </>
  )
}

export default AddSlider
