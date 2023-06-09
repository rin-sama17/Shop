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
import { c11 } from '../../assets'
const Product = ({ productId }) => {
  const { data = { product: {} }, isLoading, isSuccess } = useGetProductQuery({
    id: productId,
  })
  const navigate = useNavigate()

  if (isLoading) {
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
        onClick={() => navigate(`/products/${data.product.id}`)}
        sx={{ py: 1 }}
      >
        <Box sx={{ width: 1, mb: 2 }}>
          <Paper elevation={12} sx={{ width: 250, m: 'auto' }}>
            <CardMedia
              component="img"
              sx={{ height: 330, width: 250 }}
              alt={data.product.name}
              image={c11}
            />
          </Paper>
        </Box>
        <Typography
          color="text.primary"
          variant="subtitle1"
          textAlign="left"
          gutterBottom
        >
          {data.product.name}
        </Typography>
        <Box sx={{ width: 1 }}>
          <ProductPrice
            price={data.product.price}
            discount={data.product.discount}
            absolute
          />
        </Box>
      </Box>
    </Fade>
  )
}
export default Product
