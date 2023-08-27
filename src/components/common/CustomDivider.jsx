import { Typography, Divider, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

const CustomDivider = ({ label, color, ...props }) => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        mt: 2,
        p: 1,
      }}
    >
      <Divider
        textAlign="center"
        sx={{
          width: 1,
          mb: 2,
        }}
        {...props}
      >
        <Typography
          variant="body1"
          sx={{
            color: color ? `${color}.main` : 'text.secondary',
            textAlign: 'center',
          }}
        >
          {t(label)}
        </Typography>
      </Divider>
    </Box>
  )
}
export default CustomDivider
