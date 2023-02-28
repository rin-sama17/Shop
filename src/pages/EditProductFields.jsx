import { Button, Box } from '@mui/material'
import { useFormik } from 'formik'
import {
  CustomDivider,
  CustomFields,
  ImageUploader,
} from '../components/common'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import { fields } from '../constants/addProductFields'
import { productValidation } from '../components/validations/productValidation'
import { useEditProductMutation } from '../api'
import { toast } from 'react-toastify'
const EditProductFields = ({ product }) => {
  const navigate = useNavigate()

  const [updateProduct] = useEditProductMutation()

  const handleSubmitForm = async (values) => {
    try {
      const { id, date } = product
      const { price: productPrice, discount } = values

      const price = Math.round(productPrice - (productPrice * discount) / 100)
      await updateProduct({
        ...values,
        id,
        date,
        price,
      })
      toast.success(`محصول ${values.name} با موفقیت ویرایش شد`)
      navigate('/')
    } catch (error) {
      console.log(error.massage)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...product },
    validationSchema: productValidation,
    onSubmit: (values) => {
      handleSubmitForm(values)
    },
  })
  const productFields = fields(formik)
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Grid container>
        <CustomDivider label="ویرایش محصول" color="warning" />
        <ImageUploader formik={formik} name="thumbnail" color="warning" />
        <Grid xs={12} md={9}>
          <Box>
            <Grid container spacing={2} sx={{ direction: 'ltr' }}>
              {productFields.map((field, index) => (
                <CustomFields {...field} key={index} />
              ))}
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

export default EditProductFields
