import { Typography, Button, Box } from '@mui/material'
import { tabsData } from '../../constants/tabs.sidebar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DrawerCategories } from '.'

const DrawerItems = ({ setOpen }) => {
  const { t } = useTranslation()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {tabsData.map((tab, index) => (
        <Button
          onClick={() => setOpen(false)}
          key={index}
          component={Link}
          to={tab.to}
          size="large"
          sx={{
            mx: 1,
            height: 50,
            justifyContent: 'flex-start',
            color: 'btnSidebar.main',
            '&:hover': {
              color: 'btnSidebar.light',
            },
          }}
        >
          {tab.icon}
          <Typography variant="subtitle2" textAlign="left" sx={{ ml: 1 }}>
            {t(tab.text)}
          </Typography>
        </Button>
      ))}
      <DrawerCategories />
    </Box>
  )
}
export default DrawerItems
