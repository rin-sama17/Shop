import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Button, Container, Typography, Stack, Chip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { CartsProduct } from '.'
import { useGetCartQuery } from '../../api'
import { toRial, totalProductsPrice } from '../../helpers'
import { selectCartProducts } from '../../reducers/cartSlice'

const CartDetails = ({ button, cartId, isLocal }) => {
  const { data: cart = [], isLoading, isSuccess } = useGetCartQuery(cartId)

  let cartProducts = []

  if (isSuccess) {
    cartProducts = cart.products
  } else if (isLocal) {
    const localProducts = useSelector(selectCartProducts)
    cartProducts = localProducts
  }

  const { TPrice, TDiscount, TDiscountPersent } = totalProductsPrice(
    cartProducts,
  )

  if (cartProducts.length === 0) {
    return (
      <Stack justifyContent="center" alignItems="center" sx={{ width: 1 }}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
            سبد شما خالی میباشد
          </Typography>

          <Button fullWidth sx={{ mt: 2 }} component={Link} to="/products">
            رفتن به فروشگاه
          </Button>
        </Card>
      </Stack>
    )
  } else if (isLoading) {
    return <Typography color="text.primary">درحال دریافت اطلاعات...</Typography>
  }
  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <Grid container sx={{ width: 1 }} spacing={2}>
        <Grid xs={12} md={8}>
          {cartProducts.map((product) => (
            <CartsProduct
              productId={product.id}
              productCount={product.count}
              key={product.id}
            />
          ))}
        </Grid>
        <Grid xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{ mr: 1, display: 'flex', justifyContent: 'space-between' }}
              gutterBottom
            >
              مجموع کل:
              <Typography
                color="text.primary"
                variant="body1"
                sx={{ mr: 1, display: 'flex' }}
              >
                {TPrice && (
                  <Typography
                    variant="body1"
                    color="text.primary"
                    textAlign="start"
                    sx={{ display: 'flex' }}
                  >
                    {toRial(TPrice)}
                    <Typography color="secondary" sx={{ ml: 1 }}>
                      تومان
                    </Typography>
                  </Typography>
                )}
              </Typography>
            </Typography>
            {TPrice && TDiscount && (
              <Typography
                color="text.secondary"
                variant="body1"
                sx={{ mr: 1, display: 'flex', justifyContent: 'space-between' }}
                gutterBottom
              >
                سود شما از این خرید:
                <Typography
                  color="text.primary"
                  variant="body1"
                  sx={{ mr: 1, display: 'flex' }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="start"
                    sx={{ display: 'flex' }}
                  >
                    {toRial(TDiscount)}
                    <Chip
                      label={
                        <Typography color="text.primary" variant="caption">
                          {`${TDiscountPersent}%`}
                        </Typography>
                      }
                      color="error"
                      size="small"
                      sx={{ ml: 1 }}
                    />
                  </Typography>
                </Typography>
              </Typography>
            )}
            {button ? (
              <Button
                component={Link}
                to="/checkout"
                color="secondary"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                پرداخت
              </Button>
            ) : null}
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CartDetails
