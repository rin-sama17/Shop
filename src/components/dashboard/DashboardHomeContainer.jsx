import { useState } from 'react'
import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
  IconButton,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import {
  AddToPhotos,
  Face6,
  Logout,
  Edit,
  LibraryBooks,
} from '@mui/icons-material'
import DashboardHome from './DashboardHome'

const DashboardHomeContainer = ({ user }) => {
  const [open, setOpen] = useState(false)
  const actions = [
    { color: 'error', to: '', icon: <Logout />, name: 'خروج' },
    { color: 'info', to: '/editUser', icon: <Face6 />, name: 'ویرایش اطلاعات' },
    {
      color: 'success',
      to: '/addPost',
      icon: <LibraryBooks />,
      name: 'مقاله جدید',
    },
    {
      color: 'warning',
      to: '/addProduct',
      icon: <AddToPhotos />,
      name: 'پست جدید',
    },
  ]
  return (
    <Box
      sx={{
        transform: 'translateZ(0px)',
        flexGrow: 1,
      }}
    >
      <Backdrop open={open} />
      <DashboardHome user={user} />

      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        onClose={() => setOpen(false)} //false
        onOpen={() => setOpen(true)}
        color="secondary"
        open={open}
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
        }}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={
              <IconButton
                component={RouterLink}
                to={action.to}
                color={action.color}
              >
                {action.icon}
              </IconButton>
            }
            tooltipTitle={
              <Typography
                variant="subtitle2"
                textAlign="center"
                sx={{ width: 100 }}
              >
                {action.name}
              </Typography>
            }
            tooltipOpen
            tooltipPlacement="right"
            onClick={() => setOpen(false)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default DashboardHomeContainer
