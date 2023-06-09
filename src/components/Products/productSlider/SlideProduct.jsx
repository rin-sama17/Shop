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
import { useNavigate } from 'react-router-dom'
import { useGetProductQuery } from '../../../api'
import { ProductPrice } from '../../common'
import { ProductLoading } from '../../loading'
const SlideProduct = ({ productId }) => {
  const { data = { product: {} }, isSuccess } = useGetProductQuery(productId)
  const navigate = useNavigate()
  const product = data.product
  if (!isSuccess) {
    return <ProductLoading width={400} productId={productId} />
  }

  return (
    <Fade
      in={isSuccess}
      sx={{
        m: 'auto',
        width: 400,
      }}
    >
      <Box onClick={() => navigate(`/products/${product.id}`)} sx={{ py: 1 }}>
        <Box sx={{ width: 1, mb: 2 }}>
          <Paper elevation={12} sx={{ width: 400, m: 'auto', borderRadius: 5 }}>
            <CardMedia
              component="img"
              sx={{ height: 200, width: 400, borderRadius: 5 }}
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
export default SlideProduct
