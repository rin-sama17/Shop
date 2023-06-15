import { Divider, Box, Typography, Link } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { DrawerItems } from '.'

const DrawerContent = ({ setOpen }) => {
  const { t } = useTranslation()

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
          {t('فروشگاه من')}
        </Typography>
      </Link>
      <Divider sx={{ color: 'bgcolor.dark', my: 2 }} />

      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
