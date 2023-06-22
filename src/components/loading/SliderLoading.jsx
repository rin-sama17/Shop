import { Skeleton } from '@mui/material'

const SliderLoading = () => {
  return (
    <Skeleton
      animation="wave"
      variant="rectangular"
      sx={{
        width: '90%',
        m: 'auto',
        height: { xs: '20vh', sm: '30vh', md: '45vh' },
        borderRadius: '0 0 20px  20px ',
      }}
    />
  )
}

export default SliderLoading
