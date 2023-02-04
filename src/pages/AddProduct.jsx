import {
  Typography,
  TextField,
  Button,
  CardActionArea,
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  CardMedia,
  ImageListItem,
  OutlinedInput,
  InputAdornment,
} from '@mui/material'
import { useFormik } from 'formik'
import { CustomDivider, SearchField } from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { AddAPhoto, BookOnline, BurstMode, Percent } from '@mui/icons-material'
import { productValidation } from '../components/product/addProduct/validation/productValidation'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productAdded } from '../reducers/productSlice'
import { toRial } from '../helpers'
import { PatternFormat, NumericFormat } from 'react-number-format'

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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productFieldNames = {
    name: '',
    price: '',
    discount: '',
    details: '',
    stock: '',
    thumbnail: '',
    photos: '',
    category: '',
    tags: '',
  }
  const formik = useFormik({
    initialValues: productFieldNames,
    validationSchema: productValidation,
    onSubmit: (values) => {
      dispatch(productAdded(values))
      navigate('/')
    },
  })

  const handleChange = (e) => {
    const reader = new FileReader()
    console.log(reader)
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setPhoto(reader.result)
        formik.setFieldValue('thumbnail', reader.result)
        console.log(reader.result)
        console.log(formik.values.thumbnail)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const convertPrice = (a, b) => {
    console.log(typeof a)
    console.log(a)
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
            <Box component="div" sx={{ height: 200, width: 200, mb: 2 }}>
              <ImageListItem>
                {formik.values?.thumbnail ? (
                  <CardMedia
                    component="img"
                    image={formik.values?.thumbnail}
                    alt=""
                    sx={{ height: 200, width: 200 }}
                  />
                ) : (
                  <Box sx={{ height: 200, width: 200 }} />
                )}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: 1,
                    height: 1,
                    bgcolor: 'bgBlur.main',
                  }}
                >
                  <CardActionArea
                    component="label"
                    sx={{
                      color:
                        formik.touched.thumbnail && formik.errors.thumbnail
                          ? 'error.main'
                          : 'warning.main',
                      height: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: 'bgblur',
                    }}
                  >
                    <input
                      accept="image/*"
                      hidden
                      type="file"
                      name="thumbnail"
                      onChange={handleChange}
                    />
                    <AddAPhoto />
                  </CardActionArea>
                </Box>
              </ImageListItem>
            </Box>

            <Button
              component="label"
              color="warning"
              sx={{
                width: 50,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow:
                  '2px 2px 2px 2px rgb(0 0 0 / 20%), 2px 2px 2px 2px rgb(0 0 0 / 19%)',
              }}
            >
              <BurstMode />
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                name="photos"
                value={formik.values?.photos}
                onChange={formik.handleChange}
              />
            </Button>
          </Grid>
          <Grid xs={12} md={9}>
            <Box>
              <Grid container spacing={2} sx={{ direction: 'ltr' }}>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    name="name"
                    value={formik.values?.name}
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    onChange={formik.handleChange}
                    label="نام محصول"
                    type="text"
                    color="secondary"
                  />
                </Grid>{' '}
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
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    name="discount"
                    value={formik.values?.discount}
                    error={Boolean(
                      formik.touched.discount && formik.errors.discount,
                    )}
                    onChange={formik.handleChange}
                    label="تخفیف"
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
                    disabled={Boolean(!formik.values?.price.length > 0)}
                    type="number"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
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
                <Grid xs={12} sm={7}>
                  <TextField
                    fullWidth
                    label="برچسب ها"
                    multiline
                    size="small"
                    name="tags"
                    value={formik.values?.tags}
                    error={Boolean(formik.touched.tags && formik.errors.tags)}
                    onChange={formik.handleChange}
                    helperText="برچسب ها را با / از هم جدا کنید"
                    type="number"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    name="stock"
                    value={formik.values?.stock}
                    error={Boolean(formik.touched.stock && formik.errors.stock)}
                    onChange={formik.handleChange}
                    label="تعداد"
                    helperText="موجودی کالا"
                    type="number"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    name="details"
                    value={formik.values?.details}
                    error={Boolean(
                      formik.touched.details && formik.errors.details,
                    )}
                    onChange={formik.handleChange}
                    multiline
                    rows={4}
                    label="توضیحات"
                    type="text"
                    color="secondary"
                    variant="outlined"
                  />
                </Grid>
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
