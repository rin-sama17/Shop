import { ReportGmailerrorred } from '@mui/icons-material'
import {
  Typography,
  Box,
  IconButton,
  Tooltip,
  Button,
  TextField,
} from '@mui/material'
import MainContext from '../../../context'
import { useContext } from 'react'
import { CustomDivider, CustomLoading } from '../../common'
const ProductDetails = () => {
  const { product, loading, ToRial } = useContext(MainContext)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          px: 3,
        }}
      >
        {product.discountPercentage === 0 ? null : (
          <CustomLoading loading={loading} height={40} width="20%">
            <Typography color="error">
              %{Math.round(product.discountPercentage)} تخفیف
            </Typography>
          </CustomLoading>
        )}
        <CustomLoading loading={loading} height={40} width="30%">
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Typography color="text.secondary" variant="body1" sx={{ mr: 1 }}>
              قیمت:{' '}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                display: 'flex',
              }}
            >
              <Typography
                color="text.primary"
                sx={{
                  textDecoration:
                    product.discountPercentage === 0 ? null : 'line-through',
                  color:
                    product.discountPercentage === 0
                      ? 'none'
                      : 'gray !important',
                  textDecorationColor: 'white',
                }}
              >
                {ToRial(String(product.price))}{' '}
              </Typography>
              {product.discountPercentage === 0 ? null : (
                <Typography color="text.primary" sx={{ ml: 1 }}>
                  {ToRial(
                    String(
                      Math.round(
                        product.price -
                          (product.price * product.discountPercentage) / 100,
                      ),
                    ),
                  )}{' '}
                </Typography>
              )}
              <Typography color="secondary" sx={{ ml: 1 }}>
                تومان
              </Typography>
            </Typography>
          </Box>
        </CustomLoading>
        <CustomLoading loading={loading} height={200}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Typography color="text.secondary" variant="body1" sx={{ mr: 1 }}>
              توضیحات:
            </Typography>{' '}
            <Typography color="text.primary" variant="body1" sx={{ mr: 1 }}>
              {product.description}
            </Typography>
          </Box>
        </CustomLoading>
      </Box>

      <CustomLoading height={100} width="90%">
        <Box sx={{ px: 2 }}>
          {product.inventory === 0 ? (
            <CustomDivider
              label={
                <>
                  موجود نیست
                  <Tooltip
                    arrow
                    title="زمانی که موجود شد به من اطلاع بده"
                    placement="top"
                  >
                    <IconButton color="warning">
                      <ReportGmailerrorred />
                    </IconButton>
                  </Tooltip>
                </>
              }
            />
          ) : (
            <CustomDivider
              label={
                <>
                  <Tooltip arrow title={`${product.stock} عدد`} placement="top">
                    <Typography>موجود در انبار</Typography>
                  </Tooltip>
                </>
              }
              color="success"
            />
          )}{' '}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <TextField
            type="number"
            sx={{ width: 100, mx: 1 }}
            label="تعداد"
            disabled={product.inventory === 0 ? true : false}
          />
          <Button
            color="secondary"
            fullWidth
            variant="contained"
            disabled={product.inventory === 0 ? true : false}
          >
            افزودن به سبد خرید
          </Button>
        </Box>
      </CustomLoading>
    </>
  )
}

export default ProductDetails
