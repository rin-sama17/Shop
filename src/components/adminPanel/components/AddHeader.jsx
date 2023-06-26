import { useState } from 'react'
import { CustomForm, CustomModal } from '../../common'
import { AddBtn } from '.'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addSlider, selectSliderDetails } from '../../../reducers/sliderSlice'
import { selectLang } from '../../../reducers/langSlice'
import { headerFieldsData } from '../../fieldsData'

const AddHeader = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { access } = useSelector(selectSliderDetails)
  const lang = useSelector(selectLang)
  const formik = useFormik({
    initialValues: {
      image: null,
      name: '',
      url: '',
      type: 3,
    },
    onSubmit: (values, { resetForm, setErrors }) => {
      const newHeader = {
        ...values,
        description: 'just a text',
        lang,
      }
      dispatch(
        addSlider({
          values: newHeader,
          setOpen,
          resetForm,
          setErrors,
          isHeader: true,
        }),
      )
    },
  })

  const fields = headerFieldsData(formik)

  return (
    <>
      <AddBtn
        title="مدیریت سربرگ"
        setOpen={setOpen}
        access={access}
        color="success"
      />
      <CustomModal open={open} setOpen={setOpen}>
        <CustomForm
          formik={formik}
          fields={fields}
          label="مدیریت سربرگ"
          imageUploader
          imageUploaderName="image"
          imageUploaderProps={{ aspect: 1000 / 35, width: 1, md: 12 }}
        />
      </CustomModal>
    </>
  )
}

export default AddHeader
