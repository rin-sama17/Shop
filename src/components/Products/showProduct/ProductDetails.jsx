import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography, Card } from '@mui/material'
import { AddToCart } from '.'
import {
  CustomDivider,
  CustomIconButton,
  ProductPrice,
  ShowCategory,
} from '../../common'
import { ReportGmailerrorred } from '@mui/icons-material'

const ProductDetails = ({ product }) => {
  return (
    <Grid xs={12} md={4} sx={{ p: 1 }}>
      <Card sx={{ p: 2 }}>
        <Box sx={{ px: 2 }}>
          {product.stock === 0 ? (
            <CustomDivider
              label={
                <>
                  موجود نیست
                  <CustomIconButton
                    color="warning"
                    title="زمانی که موجود شد به من اطلاع بده"
                    icon={<ReportGmailerrorred />}
                  />
                </>
              }
            />
          ) : (
            <>
              <CustomDivider label="موجود در انبار" color="success" />{' '}
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {product.stock} عدد موجود است
              </Typography>
            </>
          )}{' '}
        </Box>
        <Typography
          color="text.secondary"
          variant="body1"
          sx={{ mr: 1, display: 'flex' }}
          gutterBottom
        >
          قیمت:
          <ProductPrice price={product.price} discount={product.discount} />
        </Typography>
        <Typography
          color="text.secondary"
          variant="body1"
          sx={{ mr: 1, display: 'flex' }}
        >
          فروشنده:
          <Typography color="secondary" sx={{ ml: 1 }}>
            ممد
          </Typography>
        </Typography>{' '}
        <AddToCart prodyctStock={product.stock} productId={product.id} />
      </Card>
    </Grid>
  )
}

export default ProductDetails
