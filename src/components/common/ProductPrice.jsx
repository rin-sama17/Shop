import { Box, Typography, Chip, useTheme, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { toRial } from '../../helpers'

const ProductPrice = ({ price, discount, absolute }) => {
  console.log('priiiiiiiiiiiiiiiiiiiiice', price, discount, absolute)
  const { t } = useTranslation()
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))

  let prevPrice
  if (discount > 0) {
    prevPrice = Math.round(price / (1 - discount / 100))
  }
  return (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        my: 1,
        position: 'relative',
      }}
    >
      <Typography
        variant={isXs ? 'subtitle2' : 'body1'}
        color="text.primary"
        textAlign="start"
        sx={{ display: 'flex' }}
      >
        {toRial(price)}
        <Typography color="secondary" variant="body2" sx={{ ml: 1 }}>
          {t('تومان')}
        </Typography>
      </Typography>
      {discount ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            color="text.secondary"
            variant={isXs ? 'caption' : 'subtitle2'}
            sx={{
              display: 'flex',
              textDecoration: discount === 0 ? null : 'line-through',
              color: discount === 0 ? 'none' : 'gray !important',
              textDecorationColor: 'text.secondary',
              mr: absolute && !isXs ? 5 : 0,
            }}
          >
            {toRial(prevPrice)}
          </Typography>
          <Chip
            label={
              <Typography sx={{ color: 'whitesmoke' }} variant="caption">
                {`${discount}%`}
              </Typography>
            }
            size="small"
            sx={{
              ml: 1,
              bgcolor: 'tomato',
              buttom: isXs ? 0 : 'auto',
              top: isXs ? 'auto' : 0,
              left: 0,
              position: absolute ? 'absolute' : 'relative',
            }}
          />
        </Box>
      ) : null}
    </Box>
  )
}

export default ProductPrice
