import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Remove, Delete } from '@mui/icons-material'
import { Box, Typography, Button, IconButton, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {
  cartItemAdded,
  cartItemDeleted,
  cartItemUpdated,
  selectCartProduct,
  selectCartProducts,
} from '../../reducers/cartSlice'

const AddToCart = ({
  productId,
  prodyctStock,
  productPrice,
  discount,
  showCounter,
}) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(selectCartProducts)
  const productCount = useSelector((state) =>
    selectCartProduct(state, productId),
  )

  const handleAdd = () => {
    dispatch(
      cartItemAdded({
        id: productId,
        count: 1,
        price: productPrice,
        discount,
      }),
    )
  }

  useEffect(() => {
    if (productCount && productCount.count === 0) {
      dispatch(cartItemDeleted(productId))
    } else if (productCount && productCount.count > 0) {
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }
  }, [productCount])

  let addToCartBtn

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
        {showCounter ? (
          <Typography sx={{ display: 'flex' }}>
            {productCount.count} عدد در{' '}
            <Typography
              component={Link}
              to="/cart"
              color="primary"
              sx={{ mx: 0.5 }}
            >
              سبد
            </Typography>{' '}
            شما
          </Typography>
        ) : null}

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
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
      {addToCartBtn}
    </Box>
  )
}

export default AddToCart
