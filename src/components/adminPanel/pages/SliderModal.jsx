import Grid from '@mui/material/Unstable_Grid2'
import { CardMedia, Button, Skeleton } from '@mui/material'
import { Suspense, useState } from 'react'
import { useGetSlidersQuery } from '../../../api'
import SliderLoading from '../../loading/SliderLoading'
import Slider from './Slider'
import { CustomModal } from '../../common'
const SliderModal = () => {
  const [open, setOpen] = useState(false)
  const [sliderId, setSliderId] = useState('')

  const { data: sliders = [], isLoading } = useGetSlidersQuery()

  if (isLoading) {
    return <SliderLoading />
  }
  return (
    <>
      <Grid container spacing={2} sx={{ width: 1 }}>
        {sliders.length > 0 &&
          sliders.map((item, index) => (
            <Grid xs={6} sm={4} lg={3} key={index}>
              <Button
                sx={{ p: 0, width: 1, height: 150, mr: 1 }}
                onClick={() => {
                  setSliderId(item.id)
                  setOpen(true)
                }}
              >
                <Suspense
                  fallback={
                    <Skeleton
                      height={150}
                      width="100%"
                      animation="pulse"
                      variant="rectangular"
                    />
                  }
                >
                  <CardMedia
                    component="img"
                    alt=""
                    src={item.photo}
                    image={item.photo}
                    width="100%"
                    height={150}
                  />
                </Suspense>
              </Button>
            </Grid>
          ))}
      </Grid>

      <CustomModal open={open} setOpen={setOpen}>
        <Slider sliderId={sliderId} setOpen={setOpen} />
      </CustomModal>
    </>
  )
}

export default SliderModal
