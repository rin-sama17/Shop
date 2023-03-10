import { useState } from 'react'
import {
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
  IconButton,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AddToPhotos, Edit, LibraryBooks } from '@mui/icons-material'

const HomeFAB = () => {
  const [open, setOpen] = useState(false)

  const actions = [
    {
      color: 'warning',
      to: '/addProduct',
      icon: <AddToPhotos />,
      name: 'محصول جدید',
    },
    {
      color: 'info',
      to: '/addPost',
      icon: <LibraryBooks />,
      name: 'پست جدید',
    },
  ]
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        onClick={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        color="secondary"
        open={open}
        sx={{
          transform: 'translateZ(0px)',
          flexGrow: 1,
          position: 'fixed',
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
    </>
  )
}

export default HomeFAB
