import * as React from 'react'
import { CustomIconButton } from '../common'
import { AdminPanelSettings, Logout, Person } from '@mui/icons-material'
import { Divider, Typography, Button, Menu, MenuItem } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/authSlice'
import { useTranslation } from 'react-i18next'

const LoginMenu = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  const { t } = useTranslation()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    dispatch(logout(navigate))
    setAnchorEl(null)
  }
  return (
    <div>
      <CustomIconButton
        title={user?.firstname}
        to="/admin-panel"
        icon={<Person />}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Typography
          color="text.secondary"
          textAlign="center"
          variant="h6"
          sx={{ my: 1 }}
        >
          {user?.firstname}
        </Typography>
        <Divider />
        <MenuItem onClick={handleClose} component={Link} to="/admin-panel">
          <AdminPanelSettings sx={{ mr: 1 }} />
          {t('پنل ادمین')}
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
          <Logout sx={{ mr: 1 }} /> {t('خروج از حساب')}
        </MenuItem>
      </Menu>
    </div>
  )
}
export default LoginMenu
