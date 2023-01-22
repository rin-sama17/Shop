import { Avatar, Box, IconButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useContext } from 'react'
import MainContext from '../../context'
import { AccountCircle } from '@mui/icons-material'
const NavAvatar = () => {
  const { user, singInModal, setSingInModal } = useContext(MainContext)

  function stringToColor(string) {
    let hash = 0
    let i
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = '#'
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }
    return color
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }
  return (
    <>
      {user ? (
        <Box component={RouterLink} to="/dashboard">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            {...stringAvatar('rin sama')}
            sx={{ width: 24, height: 24 }}
          />
        </Box>
      ) : (
        <IconButton
          onClick={() => setSingInModal((prev) => !prev)}
          color="secondary"
        >
          <AccountCircle />
        </IconButton>
      )}
    </>
  )
}
export default NavAvatar
