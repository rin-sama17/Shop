import {
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { CustomTextField, ImageUploader } from '../../common'
import { paragraphValidation } from './validation/postValidation'
import { ExpandMore, AddCircle } from '@mui/icons-material'
import { useFormik } from 'formik'

import Grid from '@mui/material/Unstable_Grid2'
const AddParagraph = () => {
  const paragraphFields = {
    title: '',
    body: '',
    photo: '',
  }
  const formik = useFormik({
    initialValues: paragraphFields,
    validationSchema: paragraphValidation,
    // onSubmit: (values) => {
    // },
  })

  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AddCircle />
        <Typography sx={{ ml: 1 }}>پاراگراف جدید</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid
              xs={12}
              md={3}
              sx={{
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <ImageUploader
                formik={formik}
                name="photo"
                color="success"
                size={200}
              />
            </Grid>
            <Grid xs={12} md={9}>
              <CustomTextField
                md={4}
                formik={formik}
                name="title"
                sx={{ mb: 2 }}
                label="عنوان"
                type="text"
              />

              <CustomTextField
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
