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
import {
  SupportAgentOutlined,
  AccountCircleOutlined,
  InfoOutlined,
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const HomeFAB = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const actions = [
    {
      color: 'warning',
      to: '/post/add',
      icon: <InfoOutlined />,
      name: 'درباره ما',
    },
    {
      color: 'info',
      to: '/product/add',
      icon: <SupportAgentOutlined />,
      name: 'تماس با ما',
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
                {t(action.name)}
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
