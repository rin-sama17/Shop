import { Skeleton, Box, CardContent, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const ShowAgencyLoading = () => {
  return (
    <Grid container sx={{ width: 1, py: 2 }}>
      <Grid xs={12} md={4} sx={{ px: 2 }}>
        <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
      </Grid>
      <Grid xs={12} md={8}>
        <Box>
          <Skeleton animation="wave" height={30} width="20%" sx={{ mb: 2 }} />
          <Skeleton animation="wave" height={30} width="40%" sx={{ mb: 2 }} />
          <Skeleton animation="wave" height={30} width="50%" sx={{ mb: 2 }} />
          <Skeleton animation="wave" height={30} width="30%" sx={{ mb: 2 }} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ShowAgencyLoading
