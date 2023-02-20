import { useState } from 'react'
import {
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { CustomFields, ImageUploader } from '../../common'
import { paragraphValidation } from '../../validations/postValidation'
import { ExpandMore, AddCircle } from '@mui/icons-material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import Grid from '@mui/material/Unstable_Grid2'
import { toast } from 'react-toastify'
import { paragraphAdded } from '../../../reducers/postSlice'
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
      dispatch(paragraphAdded(values))
      toast.success(`پاراگراف ${values.title} با موفقیت ذخیره شد`)
      resetForm()
    },
  })

  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AddCircle sx={{ color: 'success.main' }} />
        <Typography sx={{ ml: 1 }}>پاراگراف جدید</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <ImageUploader formik={formik} name="photo" color="info" />
            <Grid xs={12} md={9}>
              <CustomFields
                md={4}
                formik={formik}
                name="title"
                sx={{ mb: 2 }}
                label="عنوان"
                type="text"
              />

              <CustomFields
                md={12}
                formik={formik}
                name="body"
                label="توضیحات"
                type="text"
                multiline
                rows={6}
              />
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 2, color: 'black' }}
            >
              افزودن پاراگراف
            </Button>
          </Grid>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddParagraph
