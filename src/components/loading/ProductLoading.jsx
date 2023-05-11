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
        justifyContent: 'center',
        mb: 2,
        width: 1,
      }}
    >
      <Card
        sx={{
          width: width,
          height: 355,
        }}
      >
        <CardActionArea
          component={Link}
          to={`/product/${productId}`}
          sx={{ height: 1 }}
        >
          <Skeleton
            sx={{ height: 350, mb: 2 }}
            animation="wave"
            variant="rectangular"
          />
          <Box sx={{ p: 1 }}>
            <Skeleton animation="wave" height={30} width="40%" />
            <Skeleton animation="wave" height={40} width="70%" />
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductLoading
