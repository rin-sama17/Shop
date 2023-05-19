import { Box, Typography, Chip } from '@mui/material'
import { createSelector } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useGetDiscountsQuery } from '../../api'
import { toRial } from '../../helpers'
import Spinner from './Spinner'

const ProductPrice = ({ price, discount, absolute }) => {
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
        variant="body1"
        color="text.primary"
        textAlign="start"
        sx={{ display: 'flex' }}
      >
        {toRial(price)}
        <Typography color="secondary" variant="body2" sx={{ ml: 1 }}>
          تومان
        </Typography>
      </Typography>
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
              mr: absolute ? 5 : 0,
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
              top: 0,
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
