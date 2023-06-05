import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Box } from '@mui/material'
import { getAgency } from '@/api'

const Agency = async ({ params: { agencyId } }) => {
  const { agency } = await getAgency(agencyId)
  return (
    <Grid container sx={{ width: 1, py: 2 }}>
      <Grid xs={12} md={4} sx={{ px: 2 }}>
        <img src={agency.photo} alt={agency.name} />
      </Grid>
      <Grid xs={12} md={8}>
        {' '}
        <Typography
          variant="h6"
          color="text.primary"
          gutterBottom
          textAlign="left"
        >
          {agency.name}
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            ادرس:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.address}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            شماره تماس:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.phone}
          </Typography>
        </Box>{' '}
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            ایمیل:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.email}
          </Typography>
        </Box>{' '}
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            توضیحات:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.discription}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Agency
