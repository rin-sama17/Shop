import {
  Typography,
  CardMedia,
  Fade,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetProductQuery } from '../../api'
import { ProductPrice } from '../common'
import { ProductLoading } from '../loading'

const Product = ({ productId }) => {
  const { data = { product: {} }, isSuccess } = useGetProductQuery(productId)
  const navigate = useNavigate()
  const product = data.product
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  if (!isSuccess) {
    return <ProductLoading width={250} productId={productId} />
  }

  const width = { xs: 140, sm: 180, md: 180, lg: 210 }
  const height = { xs: 220, sm: 260, md: 260, lg: 290 }

  return (
    <Fade
      in={isSuccess}
      sx={{
        width,
        m: 'auto',
      }}
    >
      <Box onClick={() => navigate(`/products/${product.id}`)} sx={{ py: 1 }}>
        <Box sx={{ width: 1, mb: 2 }}>
          <Paper elevation={12} sx={{ width, m: 'auto' }}>
            <CardMedia
              component="img"
              sx={{ height, width }}
              alt={data.product.name}
              image={`http://localhost:8000/${product.image}`}
            />
          </Paper>
        </Box>
        <Typography
          color="text.primary"
          variant={isXs ? 'caption' : 'subtitle1'}
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
