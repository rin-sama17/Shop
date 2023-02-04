import React from 'react'
import { Box, Typography, Badge } from '@mui/material'
import { Percent } from '@mui/icons-material'
import { toRial } from '../../helpers'
const ProductPrice = ({ price, discount }) => {
  console.log(price, discount)
  let finalPrice
  price = Number(price.split(',').join(''))
  if (discount > 0) {
    finalPrice = Math.round(price - (price * discount) / 100)
  } else {
    finalPrice = price
  }
  console.log(finalPrice)

  return (
    <Box sx={{ display: 'column' }}>
      <Typography
        variant="body1"
        color="text.primary"
        textAlign="start"
        sx={{ display: 'flex' }}
      >
        {toRial(finalPrice)}
      </Typography>

      {discount === 0 ? null : (
        <Typography
          color="text.primary"
          variant="subtitle1"
          sx={{
            display: 'flex',
            textDecoration: discount === 0 ? null : 'line-through',
            color: discount === 0 ? 'none' : 'gray !important',
            textDecorationColor: 'white',
            mt: 1,
          }}
        >
          <Badge
            badgeContent={discount}
            color="error"
            sx={{
              mr: 1,
              color: 'secondary.main',
              '& .MuiBadge-badge': {
                left: -2,
                top: 13,
                border: 1,
                padding: '0 4px',
              },
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Percent />
          </Badge>
          {toRial(price)}
        </Typography>
      )}
    </Box>
  )
}

export default ProductPrice
