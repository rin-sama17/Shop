import {
  Typography,
  TextField,
  InputAdornment,
  Button,
  CardActionArea,
  Box,
  Card,
  Menu,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import {
  CustomDivider,
  SearchField,
  CustomTextField,
  ImageUploader,
} from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import {
  AddAPhoto,
  BurstMode,
  ExpandMore,
  AddCircle,
} from '@mui/icons-material'
import { useState } from 'react'
import { useFormik } from 'formik'
import { useImmer } from 'use-immer'
import { postValidation } from '../components/posts/addPost/validation/postValidation'
import AddParagraph from '../components/posts/addPost/AddParagraph'
const samples = [
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
  {
    title: 'فروشگاه من',
    body:
      '"فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار""فروشگاه من یک فروشگاه فلان بیسار"',
  },
]
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Triton',
  'Umbriel',
]

const AddPost = () => {
  const [category, setCategory] = useState('')
  const [paragraph, setParagraph] = useImmer([])

  const postFields = {
    heading: '',
    Introduction: '',
    thumbnail: '',
    category: '',
    tags: '',
  }
  const formik = useFormik({
    initialValues: postFields,
    validationSchema: postValidation,
    //   onSubmit: (values) => {
    //   },
  })

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <Box
      sx={{
        width: 1,
        px: 3,
        py: 3,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <CustomDivider label="پست جدید" color="success" />
          <Grid
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ImageUploader
              formik={formik}
              name="thumbnail"
              color="success"
              size={200}
            />
          </Grid>
          <Grid xs={12} md={9}>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              <CustomTextField
                sm={8}
                name="heading"
                formik={formik}
                label="عنوان"
              />
              <Grid xs={12} md={4}>
                <FormControl fullWidth size="small">
                  <InputLabel>دسته بندی</InputLabel>
                  <Select
                    value={category}
                    label="دسته بندی"
                    onChange={handleChange}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 48 * 4.5 + 8,
                          width: 250,
                        },
                      },
                    }}
                  >
                    <MenuItem>
                      <SearchField small />
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem value={option}> {option}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>{' '}
              <CustomTextField
                sm={12}
                name="tags"
                formik={formik}
                label="برچسب ها"
                helperText="برچسب ها را با / از هم جدا کنید"
                type="number"
                multiline
              />
              <CustomTextField
                sm={12}
                name="tags"
                formik={formik}
                multiline
                rows={4}
                label="مقدمه"
                type="text"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 2, color: 'black' }}
          >
            ارسال کن
          </Button>
          <Grid xs={12} sx={{ mt: 2 }}>
            <CustomDivider label="پاراگراف های شما" color="info" />

            <AddParagraph />
          </Grid>{' '}
          {samples.map((paragraph, index) => (
            <Accordion sx={{ mb: 2 }} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{paragraph.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{paragraph.body}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </form>
    </Box>
  )
}

export default AddPost
