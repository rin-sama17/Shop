import { Divider, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { DrawerItems } from '.'

const DrawerContent = ({ setOpen }) => {
  return (
    <Box
      sx={{
        pt: 2,
        justifyContent: 'left',
        textAlign: 'left',
        bgcolor: 'bgSidebar.main',
        height: 1,
      }}
    >
      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
