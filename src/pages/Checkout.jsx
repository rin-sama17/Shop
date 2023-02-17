import {
  Box,
  Card,
  Stack,
  Button,
  Skeleton,
  Container,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material'
import { CustomFields, ProductPrice, CustomDivider } from '../components/common'
import { useFormik } from 'formik'
import { checkoutValidation } from '../components/validations/checkoutValidation.js'
import { useGetProductQuery } from '../api'
import Grid from '@mui/material/Unstable_Grid2'

import { Link as RouterLink } from 'react-router-dom'
const Product = ({ productId }) => {
  const { data: product, isLoading } = useGetProductQuery(productId)

  if (isLoading || productId === 'tM_MOwtFcG4cqrIyDgDy_') {
    return (
      <Card sx={{ mb: 2, p: 2 }}>
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row">
            <Skeleton
              sx={{ height: 60, width: 60 }}
              animation="wave"
              variant="rectangular"
            />
            <Skeleton animation="wave" width={60} height={30} sx={{ ml: 2 }} />
          </Stack>
          <Skeleton animation="wave" width="20%" height={60} />
        </Stack>
      </Card>
    )
  }
  return (
    <Card sx={{ mb: 2 }}>
      <CardActionArea
        component={RouterLink}
        to={`/product/${product.id}`}
        sx={{ p: 2 }}
      >
        <Stack justifyContent="space-between" direction="row">
          <Stack direction="row">
            <CardMedia
              component="img"
              sx={{ height: 60, width: 60 }}
              alt={product.name}
              image={product.thumbnail}
            />
            <Typography variant="body1" color="text.primary" sx={{ ml: 2 }}>
              {product.name}
            </Typography>
          </Stack>
          <ProductPrice price={product.price} discount={product.discount} />
        </Stack>
      </CardActionArea>
    </Card>
  )
}
const Checkout = () => {
  const products = [
    'tM_MOwtFcG4cqrIyDgDy_',
    'EfJZxbsylFHZwWZXnOzVN',
    'Q1cm65nQwUtF7b6r-DbaC',
  ]

  // useEffect(()=>{
  //     products.map((product) => {
  //         const { data: product, isSuccess } = useGetProductQuery(productId)
  //         if (isSuccess) {
  //         }
  //     })
  // },[products])

  const checkoutFields = {
    fullName: '',
    phone: '',
    address: '',
  }

  const formik = useFormik({
    initialValues: checkoutFields,
    validationSchema: checkoutValidation,
    // onSubmit: (values) => {
    //   handleSubmitForm(values)
    // },
  })
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" sx={{ width: 1 }}>
        <CustomDivider label="مشخصات شما" color="info" />
        <Grid
          container
          spacing={2}
          sx={{
            width: 1,
          }}
        >
          <CustomFields
            formik={formik}
            name="fullName"
            label="نام و نام خانوادگی"
            md={6}
          />
          <CustomFields formik={formik} name="phone" phone md={6} />
          <CustomFields
            formik={formik}
            name="address"
            label="ادرس"
            multiline
            rows={6}
          />
        </Grid>
        <CustomDivider label="سبد خرید شما" />
        <Grid container sx={{ width: 1 }} spacing={2}>
          <Grid sx={12} md={8}>
            <Box sx={{ width: 1 }}>
              {products.map((productId) => (
                <Product productId={productId} key={productId} />
              ))}
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography
                color="text.secondary"
                variant="body1"
                sx={{ mr: 1, display: 'flex' }}
                gutterBottom
              >
                مجموع کل:
              </Typography>

              <Button color="secondary" fullWidth variant="contained">
                پرداخت
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}
export default Checkout
