import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { CustomForm } from '../../common'
import { paragraphValidation } from '../../validations/postValidation'
import { ExpandMore, AddCircle } from '@mui/icons-material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
import { paragraphAdded } from '../../../reducers/paragraphSlice'
import { nanoid } from '@reduxjs/toolkit'
import { paragraphFieldsData } from '../../fields/data/paragraphFieldsData'
const AddParagraph = () => {
  const dispatch = useDispatch()

  const paragraphFields = {
    title: '',
    body: '',
    photo: '',
  }
  const formik = useFormik({
    initialValues: paragraphFields,
    validationSchema: paragraphValidation,
    onSubmit: (values, { resetForm }) => {
      const { photo, title, body } = values
      dispatch(
        paragraphAdded({
          id: nanoid(),
          photo,
          title,
          body,
        }),
      )
      toast.success(`پاراگراف ${values.title} با موفقیت ذخیره شد`)
      resetForm()
    },
  })

  const fields = paragraphFieldsData(formik)
  return (
    <Accordion sx={{ mb: 2, width: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AddCircle sx={{ color: 'success.main' }} />
        <Typography sx={{ ml: 1 }}>پاراگراف جدید</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CustomForm
          formik={formik}
          fields={fields}
          label="افزودن پاراگراف جدید"
          color="info"
          imageUploader
          imageUploaderName="photo"
        />
      </AccordionDetails>
    </Accordion>
  )
}

export default AddParagraph
