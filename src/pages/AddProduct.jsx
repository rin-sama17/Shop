import {
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from '@mui/material'
import { useFormik } from 'formik'
import { CustomDivider, CustomFields, SearchField } from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { Percent } from '@mui/icons-material'
import { productValidation } from '../components/validations/productValidation'
import { useNavigate } from 'react-router-dom'
import { toRial } from '../helpers'
import { NumericFormat } from 'react-number-format'
import { toast } from 'react-toastify'
import { ImageUploader } from '../components/common'
import { useAddNewProductMutation } from '../api'
import { nanoid } from '@reduxjs/toolkit'
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
const AddProduct = () => {
  const navigate = useNavigate()

  const [addNewProduct] = useAddNewProductMutation()

  const handleSubmitForm = async (values) => {
    try {
      const {
        name,
        price,
        discount,
        details,
        stock,
        thumbnail,
        photos,
        category,
        tags,
      } = values
      await addNewProduct({
        id: nanoid(),
        date: new Date().toISOString(),
        name,
        price,
        discount,
        details,
        stock,
        thumbnail,
        photos,
        category,
        tags,
      })
      toast.success('پست جدید با موفقیت ساخته شد')
      navigate('/')
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const productFieldNames = {
    name: '',
    price: '',
    discount: '',
    details: '',
    stock: '',
    thumbnail: '',
    category: '',
    tags: '',
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    validationSchema: productValidation,
    onSubmit: (values) => {
      handleSubmitForm(values)
    },
  })

  const convertPrice = (a, b) => {
    a = Number(a.split(',').join(''))

    if (a > b) {
      return Math.round(a - (a * b) / 100)
    } else {
      return '0'
    }
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
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Grid container>
          <CustomDivider label="محصول جدید" color="warning" />
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
              name="thumbnail"
              color="warning"
              size={200}
            />
          </Grid>
          <Grid xs={12} md={9}>
            <Box>
              <Grid container spacing={2} sx={{ direction: 'ltr' }}>
                <CustomFields
                  sm={4}
                  formik={formik}
                  name="name"
                  label="نام محصول"
                />
                <Grid xs={12} sm={4}>
                  <NumericFormat
                    allowLeadingZeros
                    thousandSeparator=","
                    customInput={TextField}
                    fullWidth
                    size="small"
                    name="price"
                    value={formik.values?.price}
                    error={Boolean(formik.touched.price && formik.errors.price)}
                    onChange={formik.handleChange}
                    label="قیمت"
                    placeholder="به ریال"
                    displayType="input"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <CustomFields
                  sm={4}
                  formik={formik}
                  name="discount"
                  label="تخفیف"
                  disabled={Boolean(!formik.values?.price.length > 0)}
                  type="number"
                  helperText={
                    <Typography variant="caption">
                      قیمت کالا بعد از تخفیف :
                      {formik.errors.discount
                        ? formik.errors.discount
                        : toRial(
                            convertPrice(
                              formik.values?.price,
                              formik.values?.discount,
                            ),
                          )}
                    </Typography>
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Percent />
                      </InputAdornment>
                    ),
                  }}
                />
                <Grid xs={12} sm={5}>
                  <FormControl
                    fullWidth
                    size="small"
                    error={Boolean(
                      formik.touched.category && formik.errors.category,
                    )}
                  >
                    <InputLabel id="category-label">دسته بندی</InputLabel>
                    <Select
                      name="category"
                      value={formik.values?.category}
                      onChange={formik.handleChange}
                      labelId="category-label"
                      input={<OutlinedInput label="دسته بندی" />}
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
                  sm={7}
                  formik={formik}
                  name="tags"
                  label="برچسب ها"
                  helperText="برچسب ها را با / از هم جدا کنید"
                />
                <CustomFields
                  sm={5}
                  formik={formik}
                  name="stock"
                  label="تعداد"
                  helperText="موجودی کالا"
                  type="number"
                />
                <CustomFields
                  sm={12}
                  formik={formik}
                  name="details"
                  multiline
                  rows={4}
                  label="توضیحات"
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>{' '}
        <Button
          fullWidth
          type="submit"
          color="warning"
          variant="contained"
          sx={{ mt: 2, color: 'black' }}
        >
          ارسال کن
        </Button>
      </form>
    </Box>
  )
}

export default AddProduct
