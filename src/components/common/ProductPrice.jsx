import { Box, Typography, Chip } from '@mui/material'
import { createSelector } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useGetDiscountsQuery } from '../../api'
import { toRial } from '../../helpers'
import Spinner from './Spinner'

const ProductPrice = ({ price, discount }) => {
  let prevPrice
  if (discount > 0) {
    prevPrice = Math.round(price / (1 - discount / 100))
  }
  return (
    <Box sx={{ display: 'column', my: 1 }}>
      {discount ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            color="text.secondary"
            variant="subtitle2"
            sx={{
              display: 'flex',
              textDecoration: discount === 0 ? null : 'line-through',
              color: discount === 0 ? 'none' : 'gray !important',
              textDecorationColor: 'text.secondary',
            }}
          >
            {toRial(prevPrice)}
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
      ) : null}
      <Typography
        variant="body1"
        color="text.primary"
        textAlign="start"
        sx={{ display: 'flex' }}
      >
        {toRial(price)}
        <Typography color="secondary" sx={{ ml: 1 }}>
          تومان
        </Typography>
      </Typography>
    </Box>
  )
}

export default ProductPrice
