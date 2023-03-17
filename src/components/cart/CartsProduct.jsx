import { useDispatch } from 'react-redux'
import {
  Card,
  Stack,
  Typography,
  CardMedia,
  Fade,
  Button,
  CardContent,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useGetProductQuery } from '../../api'
import { ProductPrice } from '../common'
import { AddToCart } from '.'
import { CartProductLoading } from '../loading'
import { Link } from 'react-router-dom'
const CartProduct = ({ productId, productCount, button }) => {
  const { data: product, isLoading, isError, isSuccess } = useGetProductQuery(
    productId,
  )

  const localCartProducts = JSON.parse(localStorage.getItem('cartProducts'))
  if (isLoading) {
    return <CartProductLoading />
  } else if (isError) {
    const fixedCartProducts = localCartProducts.filter(
      (product) => product.id !== productId,
    )
    if (fixedCartProducts) {
      localStorage.setItem('cartProducts', JSON.stringify(fixedCartProducts))
    }
    return (
      <Card
        sx={{
          p: 2,
          mb: 2,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ color: 'tomato' }}>
          مشکلی پیش امده لطفا با پشتیبانی تماس بگیرید
        </Typography>
      </Card>
    )
  }
  return (
    <Fade in={isSuccess}>
      <Grid
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: 1 }}
      >
        <Card sx={{ maxWidth: 240, bgcolor: 'background.dark' }}>
          <CardMedia
            component="img"
            sx={{ height: 240, width: 240 }}
            alt={product.name}
            image={product.thumbnail}
          />

          <CardContent>
            <Typography
              color="text.primary"
              variant="subtitle1"
              textAlign="left"
            >
              {product.name}
            </Typography>
            <ProductPrice price={product.price} discount={product.discount} />
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ display: 'flex' }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>
                تعداد:
              </Typography>
              {productCount} عدد
            </Typography>
            {button && (
              <AddToCart
                productId={productId}
                prodyctStock={product.stock}
                productPrice={product.price}
                discount={product.discount}
              />
            )}
            <Button fullWidth component={Link} to={`/product/${product.id}`}>
              مشاهده محصول
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Fade>
  )
}

export default CartProduct
