import { useDispatch } from 'react-redux'
import { Card, Stack, Typography, CardMedia } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useGetProductQuery } from '../../api'
import { ProductPrice } from '../common'
import { AddToCart } from '.'
import { CartProductLoading } from '../loading'

const CartProduct = ({ productId, productCount, button }) => {
  const { data: product, isLoading, isError } = useGetProductQuery(productId)

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
    <Card sx={{ mb: 2, px: 2 }}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 1,
        }}
      >
        <Grid xs={12} sm={4}>
          <Stack direction="row">
            <CardMedia
              component="img"
              sx={{ height: 60, width: 60 }}
              alt={product.name}
              image={product.thumbnail}
            />
            <Stack justifyContent="space-between">
              <Typography variant="body1" color="text.primary" sx={{ ml: 2 }}>
                {product.name}{' '}
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ display: 'flex' }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mr: 1 }}
                  >
                    تعداد:
                  </Typography>
                  {productCount} عدد
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} sm={4}>
          <Stack direction="row" justifyContent="flex-end">
            <ProductPrice price={product.price} discount={product.discount} />
          </Stack>
        </Grid>
        <Grid xs={12} sm={4}>
          <Stack direction="row" justifyContent="flex-end">
            {button && (
              <AddToCart
                productId={productId}
                prodyctStock={product.stock}
                productPrice={product.price}
                discount={product.discount}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CartProduct
