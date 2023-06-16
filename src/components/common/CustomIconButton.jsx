import { IconButton, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const CustomIconButton = ({ title, icon, color, ...props }) => {
  const { t } = useTranslation()

  return (
    <Tooltip arrow title={t(title)} placement="top">
      <IconButton sx={{ color: `${color}.main` }} {...props}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default CustomIconButton
