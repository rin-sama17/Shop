import Grid from '@mui/material/Unstable_Grid2'
import { Container } from '@mui/material'

import { HomeSlider, HomeContent } from '../components/home'

const Home = () => {
  return (
    <Grid xs={12}>
      <HomeSlider />
      <Container
        maxWidth="lg"
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        <HomeContent />
      </Container>
    </Grid>
  )
}
export default Home
