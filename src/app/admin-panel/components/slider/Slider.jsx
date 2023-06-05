import { CardMedia, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { getSlider } from '@/api'

const Slider = ({ sliderId, setSliderId, setOpen }) => {
  const { slider } = getSlider(sliderId, '/admin')

  return (
    <Grid xs={6} sm={4} lg={3}>
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
    </Grid>
  )
}

export default Slider
