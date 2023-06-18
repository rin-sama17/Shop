import { Box, Skeleton, useMediaQuery, useTheme } from '@mui/material'

const ProductLoading = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ height: 1, width: downMd ? 220 : 250, m: 'auto' }}>
      <Skeleton
        sx={{ height: downMd ? 300 : 330, mb: 2 }}
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
