import { Typography, Button, Box } from '@mui/material'
import { tabsData } from '../../constants/tabs.sidebar'
import { Link } from 'react-router-dom'

const DrawerItems = ({ setOpen }) => {
  return (
    <Box>
      {tabsData.map((tab, index) => (
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
            borderRadius: 2,
          }}
        >
          <Typography variant="caption">{tab.text}</Typography>
        </Button>
      ))}
    </Box>
  )
}
export default DrawerItems
