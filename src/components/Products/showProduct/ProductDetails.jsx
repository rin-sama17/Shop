import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography, Card, Button } from '@mui/material'
import { CustomDivider, CustomIconButton, ProductPrice } from '../../common'
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
        <Box sx={{ display: 'flex', mb: 1 }}>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ mr: 1, display: 'flex' }}
          >
            قیمت:
          </Typography>
          <ProductPrice price={product.price} discount={product.discount} />
        </Box>

        <Button variant="contained">تماس بگیرید</Button>
      </Card>
    </Grid>
  )
}

export default ProductDetails
