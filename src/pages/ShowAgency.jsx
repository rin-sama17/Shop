import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ShowAgencyLoading } from '../components/loading'

import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import { useGetAgencyQuery } from '../api'
import { useTranslation } from 'react-i18next'

const ShowAgency = () => {
  const { agencyId } = useParams()
  const { data = { agency: [] }, isSuccess } = useGetAgencyQuery(agencyId)
  const agency = data.agency
  const { t } = useTranslation()
  if (!isSuccess) {
    return <ShowAgencyLoading />
  }
  return (
    <Grid container sx={{ width: 1, mt: 5 }}>
      <Grid xs={12} md={4} sx={{ px: 2 }}>
        <img
          src={`http://localhost:8000/${agency.image}`}
          alt={agency.name}
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid xs={12} md={8}>
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
            {t('ادرس')}:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.address}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            {t('شماره تماس')}:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.phone}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography variant="caption" color="text.primary" sx={{ mr: 2 }}>
            {t('ایمیل')}:
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agency.email}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ShowAgency
