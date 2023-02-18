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
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartItemDeleted, selectCartProducts } from '../../reducers/cartSlice'
import { useEffect } from 'react'

const CartProduct = ({ productId, productCount }) => {
  const { data: product, isLoading } = useGetProductQuery(productId)
  const dispatch = useDispatch()
  const cartProducts = useSelector(selectCartProducts)

  const handleDelete = () => {
    dispatch(cartItemDeleted(productId))
  }

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
