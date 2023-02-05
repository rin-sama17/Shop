import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material'
import { CustomLoading } from '../common'
import Grid from '@mui/material/Unstable_Grid2'
import { Link as RouterLink } from 'react-router-dom'
import { ProductPrice } from '../common'

const Product = ({ product, maxWidth, ...props }) => {
  return (
    <Grid
      xs={12}
      sx={{ display: 'flex', justifyContent: 'center', mb: 2, width: 1 }}
      {...props}
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
