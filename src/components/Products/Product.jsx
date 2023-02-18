import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import { useGetProductQuery } from '../../api'
import { ProductPrice } from '../common'
import ProductLoading from '../loading/ProductLoading'

const Product = ({ productId, maxWidth }) => {
  const { data: product, isLoading } = useGetProductQuery(productId)
  if (productId === 'AhqDOff-L42D2_cvVtmqY') {
    return <ProductLoading width={maxWidth} productId={productId} />
  }
  if (isLoading) {
    return <ProductLoading width={maxWidth} productId={productId} />
  }

  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: 1 }}
    >
      <Card sx={{ maxWidth: maxWidth }}>
        <CardActionArea component={RouterLink} to={`/product/${product.id}`}>
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
              gutterBottom
            >
              {product.name}
            </Typography>

            <ProductPrice price={product.price} discount={product.discount} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
export default Product
