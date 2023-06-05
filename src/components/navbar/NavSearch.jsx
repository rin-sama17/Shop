'use client'

import { Search } from '@mui/icons-material'
import { Box, Typography, Divider, CardMedia, Button } from '@mui/material'
import { useState } from 'react'
import {
  CustomIconButton,
  CustomModal,
  ProductPrice,
  SearchField,
} from '../common'
import Link from 'next/link'

const NavSearch = () => {
  const [open, setOpen] = useState(false)
  const { products } = getProducts()

  return (
    <>
      <CustomIconButton
        onClick={() => setOpen(true)}
        color="buttons"
        icon={<Search />}
        title="جستجو"
      />
      <CustomModal open={open} setOpen={setOpen}>
        <SearchField />
        <Box
          sx={{
            display: 'flex',
            width: 1,
            justifyContent: 'space-between',
          }}
        >
          <Typography>محصولات</Typography>
          <Button component={Link} href="/products">
            مشاهده همه
          </Button>
        </Box>
        <Divider sx={{ color: 'primary.main', my: 1 }} />
        {products.map((product, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 2,
              mb: 0.2,
            }}
            key={index}
          >
            <Box sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.name}
                sx={{ height: 100, width: 100, mr: 2 }}
              />
              <Typography color="secondary" variant="subtitle1">
                {product.name}
              </Typography>
            </Box>
            <ProductPrice price={product.price} discount={product.discount} />
          </Box>
        ))}
      </CustomModal>
    </>
  )
}
export default NavSearch
