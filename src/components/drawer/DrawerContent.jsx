import { Divider, Box } from '@mui/material'

import { DrawerHeader, DrawerItems } from '.'

const DrawerContent = ({ setOpen }) => {
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
      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
