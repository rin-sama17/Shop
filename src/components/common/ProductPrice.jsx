import { Box, Typography, Chip } from '@mui/material'
import { toRial } from '../../helpers'

const ProductPrice = ({ price, discount }) => {
  let finalPrice
  price = Number(price.split(',').join(''))
  if (discount > 0) {
    finalPrice = Math.round(price - (price * discount) / 100)
  } else {
    finalPrice = price
  }

  return (
    <Box sx={{ display: 'column', ml: 1 }}>
      {discount === 0 ? null : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            color="text.primary"
            variant="subtitle2"
            sx={{
              display: 'flex',
              textDecoration: discount === 0 ? null : 'line-through',
              color: discount === 0 ? 'none' : 'gray !important',
              textDecorationColor: 'white',
            }}
          >
            {toRial(price)}
          </Typography>
          <Chip
            label={
              <Typography color="text.primary" variant="caption">
                {`${discount}%`}
              </Typography>
            }
            color="error"
            size="small"
            sx={{ ml: 1 }}
          />
        </Box>
      )}
      <Typography
        variant="body1"
        color="text.primary"
        textAlign="start"
        sx={{ display: 'flex' }}
      >
        {toRial(finalPrice)}
        <Typography color="secondary" sx={{ ml: 1 }}>
          تومان
        </Typography>
      </Typography>
    </Box>
  )
}

export default ProductPrice
