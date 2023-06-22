import { Skeleton, useMediaQuery, useTheme } from '@mui/material'

const SliderLoading = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Skeleton
      animation="wave"
      variant="rectangular"
      sx={{
        width: '90%',
        m: 'auto',
        height: downMd ? '30vh' : '40vh',
        borderRadius: '0 0 20px  20px ',
      }}
    />
  )
}

export default SliderLoading
