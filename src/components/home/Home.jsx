import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'

import {
  HomeSlider,
  HomePostsSlider,
  HomeDescription,
  HomeNewProducts,
  HomeFAB,
  HomeContract,
} from '.'

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
        <HomeDescription />
        <HomeNewProducts />
        <HomeContract />
        <HomePostsSlider />
        <HomeFAB />
      </Box>
    </Grid>
  )
}
export default Home
