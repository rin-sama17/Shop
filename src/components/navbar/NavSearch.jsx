import { ExpandMore, Search } from '@mui/icons-material'
import {
  IconButton,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
  Card,
  CardMedia,
  Button,
} from '@mui/material'
import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import {
  CustomIconButton,
  CustomModal,
  ProductPrice,
  SearchField,
} from '../common'
import { useGetProductsQuery } from '../../api'

const NavSearch = () => {
  const [open, setOpen] = useState(false)

  const { data: products = [] } = useGetProductsQuery()
  return (
    <>
      <CustomIconButton
        onClick={() => setOpen(true)}
        color="btnNav"
        icon={<Search />}
        title="جستجو"
      />
      <CustomModal open={open} setOpen={setOpen}>
        <SearchField />
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid xs={12}>
            <Box
              sx={{
                display: 'flex',
                width: 1,
                justifyContent: 'space-between',
              }}
            >
              <Typography>محصولات</Typography>
              <Button>مشاهده همه</Button>
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
                <ProductPrice
                  price={product.price}
                  discount={product.discount}
                />
              </Box>
            ))}
          </Grid>
          {/* <Grid xs={12} md={3}>
            <Box
              sx={{
                display: 'flex',
                width: 1,
                justifyContent: 'space-between',
              }}
            >
              <Typography>مجله ها</Typography>
              <Button>مشاهده همه</Button>
            </Box>
            <Divider sx={{ color: 'primary.main', my: 1 }} />
            {posts.map((post, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography color="secondary" variant="subtitle2">
                  {post.heading}
                </Typography>
                <Typography color="text.secondary" variant="caption">
                  5 روز قبل
                </Typography>
              </Box>
            ))}
          </Grid> */}
        </Grid>
      </CustomModal>
    </>
  )
}
export default NavSearch
