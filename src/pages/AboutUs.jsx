import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useGetDescriptionQuery } from '../api'
import { Spinner } from '../components/common'

const AboutUs = () => {
  const { data: description, isLoading, isSuccess } = useGetDescriptionQuery()
  let content
  if (isLoading) {
    content = <Spinner />
  } else if (isSuccess) {
    content = (
      <>
        <Grid xs={12} md={7}>
          <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
            فروشگاه من
          </Typography>
          <Typography variant="caption" color="text.primary">
            {description.aboutUs}
          </Typography>
        </Grid>
        <Grid xs={12} md={5}>
          <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
            تماس با ما
          </Typography>
          <Typography variant="subtitle2" color="text.primary" sx={{ mb: 1 }}>
            {description.contactUs}
          </Typography>
        </Grid>
      </>
    )
  }
  return (
    <Grid container spacing={2} sx={{ width: 1, p: 3 }}>
      {content}
    </Grid>
  )
}

export default AboutUs
