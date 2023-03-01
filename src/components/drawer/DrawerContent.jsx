import { Divider, Box } from '@mui/material'

import DrawerHeader from './DrawerHeader'
import DrawerItems from './DrawerItems'

const DrawerContent = () => {
  return (
    <Box
      sx={{
        mt: 2,
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <DrawerHeader />
      <Divider
        variant="middle"
        sx={{ my: 2, backgroundColor: 'secondary.main' }}
      />
      <DrawerItems />
    </Box>
  )
}
export default DrawerContent
