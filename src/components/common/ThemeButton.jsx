import { Button, Typography } from '@mui/material'
import { DarkMode } from '@mui/icons-material'

const ThemeButton = () => {
  return (
    <Button color="primary" size="small">
      <DarkMode />
      <Typography variant="caption">حالت شب</Typography>
    </Button>
  )
}

export default ThemeButton
