import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Fade,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import { useGetProductQuery } from '../../api'
import { ProductPrice } from '../common'
import { ProductLoading } from '../loading'

const Product = ({ productId, maxWidth }) => {
  const { data: product, isLoading, isSuccess } = useGetProductQuery(productId)

  if (isLoading || productId === 'loading') {
    return <ProductLoading width={maxWidth} productId={productId} />
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
        <Card sx={{ maxWidth, bgcolor: 'background.dark' }}>
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
    </Fade>
  )
}
export default Product
