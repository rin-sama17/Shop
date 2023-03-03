import { Typography } from '@mui/material'
import ThemeButton from '../common/ThemeButton'
import { SearchField, SecondaryButton } from '../common'

const DrawerHeader = () => {
  return (
    <>
      <Typography color="text.primary" variant="h5" gutterBottom>
        فروشگاه من
      </Typography>
      <ThemeButton />
      <br />
      <SecondaryButton />

      <SearchField />
    </>
  )
}
export default DrawerHeader
