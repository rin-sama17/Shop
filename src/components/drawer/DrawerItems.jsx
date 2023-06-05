import { tabsData } from '@/constants/homeProductsTabs'
import { Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

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
              color: 'bgcolor.dark',
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
