import { CircularProgress, Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
const Spinner = ({ text = '' }) => {
  const { t } = useTranslation()
  const header = text ? <h4>{text}</h4> : 'در حال بارگذاری'

  return (
    <Box
      sx={{
        m: 'auto',
        width: 1,
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="secondary" />
      <Typography color="text.primary" sx={{ mt: 1 }}>
        {t(header)}
      </Typography>
    </Box>
  )
}

export default Spinner
