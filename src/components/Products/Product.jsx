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
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
  const product = data.product
  if (!isSuccess) {
    return <ProductLoading width={250} productId={productId} />
  }

  return (
    <Fade
      in={isSuccess}
      sx={{
        width: downMd ? 220 : 250,
        m: 'auto',
      }}
    >
      <Box onClick={() => navigate(`/products/${product.id}`)} sx={{ py: 1 }}>
        <Box sx={{ width: 1, mb: 2 }}>
          <Paper elevation={12} sx={{ width: downMd ? 220 : 250, m: 'auto' }}>
            <CardMedia
              component="img"
              sx={{ height: downMd ? 300 : 330, width: downMd ? 220 : 250 }}
              alt={data.product.name}
              image={`http://localhost:8000/${product.image}`}
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
