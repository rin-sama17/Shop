import { Button, Typography } from '@mui/material'
import { DarkMode, Brightness5 } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { getThemeMode, themeModeChanged } from '../../reducers/themeSlice'
const ThemeButton = () => {
  const prevTheme = useSelector(getThemeMode)
  const dispatch = useDispatch()

  const handleThemeChange = () => {
    const currentTheme = prevTheme === 'dark' ? 'light' : 'dark'
    dispatch(themeModeChanged(currentTheme))
  }

  let content
  if (prevTheme === 'dark') {
    content = (
      <>
        <Brightness5 />
        <Typography variant="caption">حالت روز</Typography>
      </>
    )
  } else {
    content = (
      <>
        <DarkMode />
        <Typography variant="caption">حالت شب</Typography>
      </>
    )
  }

  return (
    <Button
      color={prevTheme === 'dark' ? 'warning' : 'primary'}
      size="small"
      onClick={handleThemeChange}
    >
      {content}
    </Button>
  )
}

export default ThemeButton
