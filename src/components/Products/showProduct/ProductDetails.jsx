import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography, Card, Button } from '@mui/material'
import {
  CustomDivider,
  CustomIconButton,
  ProductPrice,
  ShowCategory,
} from '../../common'
import { ReportGmailerrorred } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const ProductDetails = ({ product }) => {
  const { t } = useTranslation()
  return (
    <Grid xs={12} md={8} sx={{ pl: 2 }}>
      <Card sx={{ p: 2, border: 0 }}>
        <Typography
          color="text.secondary"
          variant="h5"
          sx={{ mr: 1 }}
          gutterBottom
        >
          {t(product.name)}
        </Typography>
        <Box sx={{ px: 2 }}>
          <ShowCategory categoryId={product.category_id} tags={product.tags} />
          {product.remaining === 0 ? (
            <CustomDivider
              label={
                <>
                  {t('موجود نیست')}
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
                {product.remaining} {t('عدد موجود است')}
              </Typography>
            </>
          )}{' '}
        </Box>
        <Box sx={{ display: 'flex', my: 2 }}>
          <Typography
            color="text.secondary"
            variant="subtitle2"
            sx={{ mr: 1 }}
            gutterBottom
          >
            {t('توضیحات')}:
          </Typography>
          <Typography variant="subtitle2" sx={{ mr: 1 }} gutterBottom>
            {product.description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mb: 1 }}>
          <Typography
            color="text.secondary"
            variant="body1"
            sx={{ mr: 1, display: 'flex', alignItems: 'center' }}
          >
            {t('قیمت')}:
          </Typography>
          <ProductPrice price={product.price} discount={product.discount} />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{ borderRadius: '0  20px  0 20px ', mt: 1 }}
        >
          {t('تماس بگیرید')}
        </Button>
      </Card>
    </Grid>
  )
}

export default ProductDetails
