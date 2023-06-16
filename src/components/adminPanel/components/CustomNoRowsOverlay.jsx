import { notFound } from '../../../assets'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function CustomNoRowsOverlay() {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <img
        src={notFound}
        alt="not found"
        style={{ height: '200px', width: '200px' }}
      />
      <Typography sx={{ mt: 1 }} color="text.secondary">
        {t('داده ای برای نمایش وجود ندارد')}
      </Typography>
    </Box>
  )
}
