'use client'

import { useState } from 'react'
import {
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
  IconButton,
} from '@mui/material'
import {
  SupportAgentOutlined,
  AccountCircleOutlined,
  InfoOutlined,
} from '@mui/icons-material'
import Link from 'next/link'

const HomeFAB = () => {
  const [open, setOpen] = useState(false)

  const actions = [
    {
      color: 'warning',
      to: '/about-us',
      icon: <InfoOutlined />,
      name: 'درباره ما',
    },
    {
      color: 'info',
      to: '/contract-us',
      icon: <SupportAgentOutlined />,
      name: 'ارتباط با ما',
    },
  ]
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon openIcon={<AccountCircleOutlined />} />}
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
          '.MuiSvgIcon-fontSizeMedium': {
            width: '26px !important',
            height: '26px !important',
          },
        }}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={
              <IconButton component={Link} to={action.to} color={action.color}>
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
