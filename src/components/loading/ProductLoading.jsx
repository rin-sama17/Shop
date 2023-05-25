import { Box, Skeleton } from '@mui/material'

const ProductLoading = () => {
  return (
    <Box sx={{ height: 1, width: 250, m: 'auto' }}>
      <Skeleton
        sx={{ height: 330, mb: 2 }}
        animation="wave"
        variant="rectangular"
      />
      <Box sx={{ p: 1 }}>
        <Skeleton animation="wave" height={30} width="40%" />
        <Skeleton animation="wave" height={40} width="70%" />
      </Box>
    </Box>
  )
}

export default ProductLoading
