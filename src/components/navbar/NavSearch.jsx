import { useTheme, useMediaQuery } from '@mui/material'
import { SearchField } from '../common'

const NavSearch = () => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

  return <SearchField downMd={downMd} />
}
export default NavSearch
