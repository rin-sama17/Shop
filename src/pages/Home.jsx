import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'

import { HomeSlider, HomeContent } from '../components/home'
import { useGetSlidersQuery } from '../api'
import { SliderLoading } from '../components/loading'

const Home = () => {
  const { data = { data: [] }, isSuccess } = useGetSlidersQuery()
  const sliders = data.data

  return (
    <Grid xs={12}>
      {isSuccess || sliders.length > 0 ? (
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
