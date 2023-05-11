import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'

import { HomeSlider, HomeContent } from '../components/home'

const Home = () => {
  return (
    <Grid xs={12}>
      <HomeSlider />
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
