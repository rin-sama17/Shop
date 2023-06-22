import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { error404 } from '../assets'

export default function ErrorElement() {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img
        src={error404}
        alt="not found"
        style={{
          width: 289,
          height: 174,
          objectFit: 'cover',
        }}
      />
      <Typography color="text.secondary" variant="subtitle1">
        {t('صفحه مورد نظر یافت نشد')}
      </Typography>
      <Button variant="contained" sx={{ mt: 1 }} component={Link} to="/">
        {t('برگشت به خانه')}
      </Button>
    </Box>
  )
}
