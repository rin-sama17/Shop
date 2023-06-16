import { Link } from 'react-router-dom'
import { Card, Button, Typography, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

const CustomMassage = ({ text, btnLabel, to }) => {
  const { t } = useTranslation()

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ width: 1 }}>
      <Card sx={{ p: 3, my: 2, textAlign: 'center' }}>
        <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
          {t(text)}
        </Typography>

        <Button fullWidth sx={{ mt: 2 }} component={Link} to={to}>
          {btnLabel}
        </Button>
      </Card>
    </Stack>
  )
}

export default CustomMassage
