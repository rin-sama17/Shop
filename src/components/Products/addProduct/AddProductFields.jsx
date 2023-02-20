import { Button, Box } from '@mui/material'
import { useFormik } from 'formik'
import { CustomDivider, CustomFields, ImageUploader } from '../../common'
import Grid from '@mui/material/Unstable_Grid2'
import { productValidation } from '../../validations/productValidation'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAddNewProductMutation } from '../../../api'
import { nanoid } from '@reduxjs/toolkit'
import { fields } from '../../../constants/addProductFields'

const AddProductFields = () => {
  const navigate = useNavigate()

  const [addNewProduct] = useAddNewProductMutation()

  const handleSubmitForm = async (values) => {
    try {
      const {
        name,
        price: productPrice,
        discount,
        details,
        stock,
        thumbnail,
        photos,
        category,
        tags,
      } = values
      let numberedPrice = Number(productPrice.split(',').join(''))
      const price = Math.round(numberedPrice - (numberedPrice * discount) / 100)

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
  const productFields = fields(formik)
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Grid container>
        <CustomDivider label="محصول جدید" color="warning" />
        <ImageUploader formik={formik} name="thumbnail" color="warning" />
        <Grid xs={12} md={9}>
          <Box>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              {productFields.map((field, index) => {
                console.log(field)
                return <CustomFields {...field} key={index} />
              })}
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
  )
}

export default AddProductFields
