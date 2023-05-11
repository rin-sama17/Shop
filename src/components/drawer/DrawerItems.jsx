import { Typography, Button, Box, Divider } from '@mui/material'
import { tabsData } from '../../constants/tabs.sidebar'
import { Link } from 'react-router-dom'

const DrawerItems = ({ setOpen }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {tabsData.map((tab, index) => (
        <>
          <Divider sx={{ bgcolor: 'gray' }} />
          <Button
            onClick={() => setOpen(false)}
            key={index}
            component={Link}
            to={tab.to}
            size="large"
            color="secondary"
            sx={{
              my: 0.5,
              mx: 1,
              height: 30,
            }}
          >
            <Typography variant="caption">{tab.text}</Typography>
          </Button>
        </>
      ))}
    </Box>
  )
}
export default DrawerItems
