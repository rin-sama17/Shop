import {
  Card,
  Stack,
  Skeleton,
  Typography,
  CardMedia,
  CardActionArea,
} from '@mui/material'
import { Delete } from '@mui/icons-material'

import { ProductPrice, CustomIconButton } from '../common'
import { useGetProductQuery } from '../../api'
import { useDispatch } from 'react-redux'
import { cartItemDeleted } from '../../reducers/cartSlice'

const CartProduct = ({ productId, productCount }) => {
  const { data: product, isLoading, isError } = useGetProductQuery(productId)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(cartItemDeleted(productId))
  }

  const localCartProducts = JSON.parse(localStorage.getItem('cartProducts'))
  // dispatch(cartItemsSeted(localCartProducts))
  if (isLoading) {
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
    <Card sx={{ mb: 2, p: 2 }}>
      <Stack justifyContent="space-between" direction="row">
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
              <CustomIconButton
                onClick={handleDelete}
                icon={<Delete />}
                title="حذف از سبد"
                color="error"
              />{' '}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ ml: 2, display: 'flex' }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>
                تعداد:
              </Typography>
              {productCount} عدد
            </Typography>
          </Stack>
        </Stack>
        <ProductPrice price={product.price} discount={product.discount} />
      </Stack>
    </Card>
  )
}

export default CartProduct
