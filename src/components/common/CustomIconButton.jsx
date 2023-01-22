import { IconButton, Tooltip } from '@mui/material'
export const CustomIconButton = ({ title, icon, color }) => {
  return (
    <Tooltip arrow title={title} placement="top">
      <IconButton color={color}>{icon}</IconButton>
    </Tooltip>
  )
}

export default CustomIconButton
