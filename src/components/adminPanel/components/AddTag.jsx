import { Chip } from '@mui/material'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import {
  addTag,
  selectTag_id,
  tagDeleted,
  tagAdded,
  tagIdsCleared,
  selectTagDetails,
} from '../../../reducers/tagSlice'

import { CustomForm, CustomModal } from '../../common'
import { tagFieldData } from '../../fieldsData'
import { AddBtn } from '.'

const AddTag = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const tempTags = useSelector(selectTag_id)
  const { access } = useSelector(selectTagDetails)
  const lang = useSelector(selectLang)

  useEffect(() => {
    if (!open) {
      dispatch(tagIdsCleared())
    }
  }, [open])
  const handleDelete = (tag) => {
    dispatch(tagDeleted(tag))
  }
  const handleAddToTemp = (values) => {
    dispatch(tagAdded(values))
  }
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      handleAddToTemp(values)
    },
  })

  const handleSubmit = () => {
    const arrayTags = tempTags.map((tag) => tag.name)
    const singleName = formik.values.name
    const setErrors = formik.setErrors
    if (
      singleName &&
      singleName.length > 0 &&
      !singleName.includes(arrayTags)
    ) {
      arrayTags.push(singleName)
    }

    dispatch(addTag({ values: { name: arrayTags, lang }, setOpen, setErrors }))
    dispatch(tagIdsCleared())
  }
  const fields = tagFieldData(formik)
  const extraFields = [
    {
      md: 12,
      submit: true,
      isBtn: true,
      onClick: () => handleSubmit(),
      customLabel: 'ثبت',
    },
  ]
  return (
    <>
      <AddBtn setOpen={setOpen} title="افزودن تگ جدید" access={access} />

      <CustomModal open={open} setOpen={setOpen}>
        {tempTags?.map((tag, index) => (
          <Chip
            key={index}
            label={tag.name}
            variant="outlined"
            sx={{ m: 0.4 }}
            onDelete={() => handleDelete(tag.name)}
          />
        ))}
        <CustomForm
          formik={formik}
          fields={fields}
          extraFields={extraFields}
          label="افزودن تگ جدید"
        />
      </CustomModal>
    </>
  )
}

export default AddTag
