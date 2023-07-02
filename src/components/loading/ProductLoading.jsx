import { Box, Skeleton } from '@mui/material'

const ProductLoading = () => {
  const width = { xs: 140, sm: 180, md: 180, lg: 210 }
  const height = { xs: 220, sm: 260, md: 260, lg: 290 }
  return (
    <Box sx={{ height: 1, width, m: 'auto' }}>
      <Skeleton sx={{ height }} animation="wave" variant="rectangular" />
      <Box sx={{ p: 1 }}>
        <Skeleton animation="wave" height={30} width="40%" />
        <Skeleton animation="wave" height={40} width="70%" />
      </Box>
    </Box>
  )
}

export default ProductLoading
