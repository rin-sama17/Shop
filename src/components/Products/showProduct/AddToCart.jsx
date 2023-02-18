import { Box, Typography, Button, IconButton, Stack } from '@mui/material'
import { Add, Remove, Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartItemAdded,
  cartItemDeleted,
  cartItemUpdated,
  selectCartProduct,
  selectCartProducts,
} from '../../../reducers/cartSlice'
import { useEffect } from 'react'
const AddToCart = ({ productId, prodyctStock, productPrice, discount }) => {
  const productCount = useSelector((state) =>
    selectCartProduct(state, productId),
  )
  const cartProducts = useSelector(selectCartProducts)
  const dispatch = useDispatch()
  let addToCartBtn

  const handleAdd = () => {
    dispatch(
      cartItemAdded({ id: productId, count: 1, price: productPrice, discount }),
    )
  }

  useEffect(() => {
    if (productCount && productCount.count === 0) {
      dispatch(cartItemDeleted(productId))
    } else if (productCount && productCount.count > 0) {
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }
  }, [productCount])

  if (!productCount) {
    addToCartBtn = (
      <Button
        color="secondary"
        fullWidth
        onClick={handleAdd}
        variant="contained"
        disabled={prodyctStock === 0 ? true : false}
        sx={{ height: 60 }}
      >
        افزودن به سبد خرید
      </Button>
    )
  } else {
    const handleIncrease = () => {
      dispatch(
        cartItemUpdated({
          id: productId,
          changes: { count: productCount.count + 1 },
        }),
      )
    }
    const handleDecrease = () => {
      dispatch(
        cartItemUpdated({
          id: productId,
          changes: { count: productCount.count - 1 },
        }),
      )
    }
    const handleDelete = () => {
      dispatch(cartItemDeleted(productId))
    }

    addToCartBtn = (
      <Stack>
        <Typography sx={{ display: 'flex' }}>
          {productCount.count} عدد در{' '}
          <Typography color="primary" sx={{ mx: 0.5 }}>
            سبد
          </Typography>{' '}
          شما
        </Typography>
        <Stack direction="row" justifyContent="center">
          <IconButton
            color="success"
            onClick={handleIncrease}
            disabled={Boolean(prodyctStock <= productCount.count)}
          >
            <Add />
          </IconButton>{' '}
          <IconButton
            sx={{ color: 'tomato' }}
            onClick={handleDelete}
            disabled={Boolean(productCount.count < 1)}
          >
            <Delete />
          </IconButton>
          <IconButton
            color="error"
            onClick={handleDecrease}
            disabled={Boolean(productCount.count < 1)}
          >
            <Remove />
          </IconButton>{' '}
        </Stack>
      </Stack>
    )
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 5 }}>
      {addToCartBtn}
    </Box>
  )
}

export default AddToCart
