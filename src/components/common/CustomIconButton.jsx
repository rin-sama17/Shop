import { IconButton, Tooltip } from '@mui/material'

export const CustomIconButton = ({ title, icon, color, ...props }) => {
  return (
    <Tooltip arrow title={title} placement="top">
      <IconButton sx={{ color: `${color}.main` }} {...props}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default CustomIconButton
