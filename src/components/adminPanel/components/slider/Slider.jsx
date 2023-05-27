import { Suspense, useState } from 'react'
import { CardMedia, Button, Skeleton } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useGetSliderQuery } from '../../../../api'
import { SliderLoading } from '../../../loading'

const Slider = ({ sliderId, setSliderId, setOpen }) => {
  const { data: slider, isLoading, isSuccess } = useGetSliderQuery(sliderId)

  let content
  if (isLoading) {
    content = <Skeleton height={150} animation="wave" variant="rectangular" />
  } else if (isSuccess) {
    content = (
      <Button
        sx={{ p: 0, width: 1, height: 150, mr: 1 }}
        onClick={() => {
          setSliderId(slider.id)
          setOpen(true)
        }}
      >
        <CardMedia
          component="img"
          alt=""
          src={slider.photo}
          image={slider.photo}
          width="100%"
          height={150}
        />
      </Button>
    )
  }
  return (
    <Grid xs={6} sm={4} lg={3}>
      {content}
    </Grid>
  )
}

export default Slider
