import Grid from '@mui/material/Unstable_Grid2'
import { ProductDetails, ProductComments } from '.'
import { ShowCategory } from '../../common'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { ArrowLeft } from '@mui/icons-material'
const ProductContent = ({ product }) => {
  return (
    <Box pt={2}>
      <Box
        mb={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ mb: 2 }}
          color="secondary"
          textAlign="center"
          variant="h6"
        >
          {product.name}
        </Typography>
        <Breadcrumbs
          separator={<ArrowLeft fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link underline="hover" key="1" color="secondary" href="/">
            خانه
          </Link>
          <Link underline="hover" key="2" color="secondary" href="/products">
            فروشگاه
          </Link>
          <Link underline="hover" key="3" color="secondary">
            {product.category}
          </Link>
          <Typography key="4" color="text.primary">
            {product.name}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Grid container spacing={2} sx={{ width: 1 }}>
        <Grid
          xs={12}
          md={4}
          sx={{ p: 1, display: 'flex', justifyContent: 'center' }}
        >
          <img className="zoom" src={product.thumbnail} alt={product.name} />
        </Grid>
        <Grid xs={12} md={4}>
          <ShowCategory categoryId={product.category} tags={product.tags} />
        </Grid>

        <ProductDetails product={product} />
        <Grid xs={12}>
          <ProductComments productId={product.id} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductContent
