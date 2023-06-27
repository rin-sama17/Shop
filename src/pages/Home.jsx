import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'

import { HomeSlider, HomeContent } from '../components/home'
import { useGetSlidersQuery } from '../api'
import { SliderLoading } from '../components/loading'
import { useMemo } from 'react'
import { createSelector } from '@reduxjs/toolkit'

const Home = () => {
  const selectSliders = useMemo(() => {
    return createSelector(
      (res) => res.data?.data.sliders,
      (data) => data.filter((slider) => slider.type != 3),
    )
  }, [])
  const { sliders, isSuccess } = useGetSlidersQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      sliders: selectSliders(res),
    }),
  })
  return (
    <Grid xs={12}>
      {isSuccess && sliders.length > 0 ? (
        <HomeSlider sliders={sliders} />
      ) : (
        <SliderLoading />
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        <HomeContent />
      </Box>
    </Grid>
  )
}
export default Home
