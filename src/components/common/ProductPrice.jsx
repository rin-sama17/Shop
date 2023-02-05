import React from 'react'
import { Box, Typography, Badge, Chip } from '@mui/material'
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
    <Box sx={{ display: 'column', ml: 1 }}>
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

      {discount === 0 ? null : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            {toRial(price)}

            {/* <Badge
            badgeContent={discount}
        
            sx={{
              ml: 2,
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
          </Badge> */}
          </Typography>{' '}
          <Chip
            label={`${discount}%`}
            color="error"
            size="small"
            sx={{ ml: 1 }}
          />
        </Box>
      )}
    </Box>
  )
}

export default ProductPrice
