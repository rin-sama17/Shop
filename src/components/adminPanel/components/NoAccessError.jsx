import { error403 } from '../../../assets'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function NoAccessError() {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <img
        src={error403}
        alt="not found"
        style={{ height: '200px', paddingRight: '30px' }}
      />
      <Typography sx={{ mt: 1 }} color="text.secondary">
        {t('شما به این صفحه دسترسی ندارید')}
      </Typography>
    </Box>
  )
}
