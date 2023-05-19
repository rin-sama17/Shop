import { Skeleton } from '@mui/material'

const SliderLoading = () => {
  return (
    <Skeleton
      height="230px"
      animation="wave"
      variant="rectangular"
      sx={{ mt: 2 }}
    />
  )
}

export default SliderLoading
