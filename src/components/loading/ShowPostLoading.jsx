import { Container, Skeleton } from '@mui/material'
import React from 'react'

const ShowPostLoading = () => {
  return (
    <Container maxWidth="md" sx={{ px: 2, my: 3 }}>
      <Skeleton animation="wave" height={40} width="60%" />
      <Skeleton
        sx={{ height: '70vh', my: 2 }}
        animation="wave"
        variant="rectangular"
      />
      <Skeleton animation="wave" height={15} />
      <Skeleton animation="wave" height={15} />
      <Skeleton animation="wave" height={15} width="50%" />
      <Skeleton animation="wave" height={40} width="40%" sx={{ mt: 5 }} />
      <Skeleton
        sx={{ height: '70vh', my: 1 }}
        animation="wave"
        variant="rectangular"
      />
      <Skeleton animation="wave" height={15} />
      <Skeleton animation="wave" height={15} />
      <Skeleton animation="wave" height={15} width="50%" />
    </Container>
  )
}

export default ShowPostLoading
