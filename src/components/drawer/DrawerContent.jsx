import { Divider, Box, Typography } from '@mui/material'

import { DrawerItems } from '.'

const DrawerContent = ({ setOpen }) => {
  return (
    <Box
      sx={{
        mt: 2,
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography color="text.primary" variant="h5" gutterBottom>
        فروشگاه من
      </Typography>

      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
