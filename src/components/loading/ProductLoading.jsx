import { Box, Skeleton, Card } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
const ProductLoading = () => {
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
      }}
    >
      <Card
        sx={{
          width: 240,
          height: 355,
        }}
      >
        <Skeleton
          sx={{ height: 240, mb: 1 }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{ p: 1 }}>
          <Skeleton animation="wave" height={30} width="40%" />
          <Skeleton animation="wave" height={40} width="70%" />
        </Box>
      </Card>
    </Grid>
  )
}

export default ProductLoading
