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
  CardMedia,
  Avatar,
  IconButton,
} from '@mui/material'
import {
  CustomDivider,
  SearchField,
  CustomFields,
  ImageUploader,
  CustomIconButton,
} from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { ExpandMore, Edit, Delete } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useImmer } from 'use-immer'
import { postValidation } from '../components/posts/addPost/validation/postValidation'
import AddParagraph from '../components/posts/addPost/AddParagraph'
import { toast } from 'react-toastify'
import { Stack } from '@mui/system'
import { useSelector } from 'react-redux'
import { getAllParagraph } from '../reducers/postSlice'
import ShowParagraphs from '../components/posts/addPost/ShowParagraphs'
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
  const [action, setAction] = useState('read')

  const paragraph = useSelector(getAllParagraph)
  console.log(paragraph)
  const postFields = {
    heading: '',
    Introduction: '',
    thumbnail: '',
    category: '',
    tags: '',
    paragraph: paragraph,
  }
  const formik = useFormik({
    initialValues: postFields,
    validationSchema: postValidation,
    //   onSubmit: (values) => {
    //   },
  })
  useEffect(() => {
    if (formik.errors.paragraph) {
      toast.error(formik.errors.paragraph)
    }
  }, [formik.errors.paragraph])

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
              <CustomFields
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
                    {options.map((option, index) => (
                      <MenuItem value={option} key={index}>
                        {' '}
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>{' '}
              <CustomFields
                sm={12}
                name="tags"
                formik={formik}
                label="برچسب ها"
                helperText="برچسب ها را با / از هم جدا کنید"
                type="number"
                multiline
              />
              <CustomFields
                sm={12}
                name="Introduction"
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
          <Grid xs={12} sx={{ mt: 2 }}></Grid>{' '}
        </Grid>
      </form>
      <Stack sx={{ width: 1 }}>
        <CustomDivider label="پاراگراف های شما" color="info" />
        <AddParagraph /> <ShowParagraphs />
      </Stack>
    </Box>
  )
}

export default AddPost
