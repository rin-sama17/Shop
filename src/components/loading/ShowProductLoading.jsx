import { Skeleton, Card, Container, Box } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
const ShowProductLoading = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        sx={{
          width: 1,
          p: 5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid xs={12} md={4} sx={{ p: 1, minHeight: '50vh' }}>
          <Skeleton height={30} width="40%" />
          <Skeleton
            sx={{ my: 2 }}
            height={200}
            animation="wave"
            variant="rectangular"
          />
        </Grid>

        <Grid xs={12} md={4} sx={{ p: 1 }}>
          <Card
            sx={{
              p: 2,
              height: '30vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Skeleton sx={{ mb: 2 }} />
            <Box>
              <Skeleton height={15} width="30%" />
              <Skeleton height={15} width="70%" />
              <Skeleton height={15} width="60%" />
            </Box>
            <Skeleton height={60} width="100%" />
          </Card>
        </Grid>
        <Grid xs={12}>
          <Skeleton animation="wave" height={15} />
          <Skeleton animation="wave" height={15} />
          <Skeleton animation="wave" height={15} width="50%" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShowProductLoading
