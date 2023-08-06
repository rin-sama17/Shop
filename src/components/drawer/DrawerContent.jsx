import { Divider, Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { DrawerItems } from '.'

const DrawerContent = ({ setOpen }) => {
  const { t } = useTranslation()

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
      <Typography
        component={Link}
        to="/"
        variant="h5"
        sx={{ ml: 1, color: 'title.dark' }}
      >
        {t('فرش لبخند')}
      </Typography>
      <Divider sx={{ color: 'bgcolor.dark', my: 2 }} />

      <DrawerItems setOpen={setOpen} />
    </Box>
  )
}
export default DrawerContent
