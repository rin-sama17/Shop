import { Typography, Button, Box, Divider } from '@mui/material'
import { tabsData } from '../../constants/tabs.sidebar'
import { Link } from 'react-router-dom'

const DrawerItems = ({ setOpen }) => {
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
            color: 'secondary.main',
            '&:hover': {
              color: 'buttons.main',
            },
          }}
        >
          {tab.icon}
          <Typography variant="subtitle2" textAlign="left" sx={{ ml: 1 }}>
            {tab.text}
          </Typography>
        </Button>
      ))}
    </Box>
  )
}
export default DrawerItems
