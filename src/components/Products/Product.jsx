import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Fade,
  Paper,
  Box,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import { useGetProductQuery } from '../../api'
import { ProductPrice } from '../common'
import { ProductLoading } from '../loading'

const Product = ({ productId }) => {
  const { data: product, isLoading, isSuccess } = useGetProductQuery(productId)
  const navigate = useNavigate()

  if (isLoading || productId === 'loading') {
    return <ProductLoading width={250} productId={productId} />
  }

  return (
    <Fade
      in={isSuccess}
      sx={{
        width: 250,
        m: 'auto',
      }}
    >
      <Box
        onClick={() => navigate(`/product/read/${product.id}`)}
        sx={{ py: 1 }}
      >
        <Box sx={{ width: 1, mb: 2 }}>
          <Paper elevation={12} sx={{ width: 250, m: 'auto' }}>
            <CardMedia
              component="img"
              sx={{ height: 1, width: 250 }}
              alt={product.name}
              image={product.thumbnail}
            />
          </Paper>
        </Box>
        <Typography
          color="text.primary"
          variant="subtitle1"
          textAlign="left"
          gutterBottom
        >
          {product.name}
        </Typography>
        <Box sx={{ width: 1 }}>
          <ProductPrice
            price={product.price}
            discount={product.discount}
            absolute
          />
        </Box>
      </Box>
    </Fade>
  )
}
export default Product
