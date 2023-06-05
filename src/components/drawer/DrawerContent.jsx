import { Divider, Box, Typography, Link } from '@mui/material'

import { DrawerItems } from '.'

const DrawerContent = ({ setOpen }) => {
  return (
    <Box
      sx={{
        pt: 2,
        justifyContent: 'left',
        textAlign: 'left',
        px: 2,
        bgcolor: 'bgSidebar.main',
        height: 1,
      }}
    >
      <Link href="/" underline="none">
        <Typography variant="h5" sx={{ color: 'title.dark' }}>
          فروشگاه فرش
        </Typography>
      </Link>
      <Divider sx={{ color: 'bgcolor.dark', my: 2 }} />

      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
