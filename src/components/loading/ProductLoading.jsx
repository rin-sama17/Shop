import { Box, Skeleton, Card, CardActionArea } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'

const ProductLoading = ({ width, productId }) => {
  return (
    <Grid
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: 'flex',
        justifyContent: 'start',
        m: 3,
        width: 1,
      }}
    >
      <Box
        component={Link}
        to={`/product/${productId}`}
        sx={{ height: 1, width: 250 }}
      >
        <Skeleton
          sx={{ height: 330, my: 2 }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{ p: 1 }}>
          <Skeleton animation="wave" height={30} width="40%" />
          <Skeleton animation="wave" height={40} width="70%" />
        </Box>
      </Box>
    </Grid>
  )
}

export default ProductLoading
