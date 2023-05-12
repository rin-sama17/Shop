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
        bgcolor: 'title.main',
        height: 1,
      }}
    >
      <Link href="/" underline="none">
        <Typography variant="h5" sx={{ color: 'background.main' }}>
          فروشگاه فرش
        </Typography>
      </Link>
      <Divider sx={{ color: 'navbarbg.main', my: 2 }} />

      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
