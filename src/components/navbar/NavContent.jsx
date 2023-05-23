import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material'
import {
  ShoppingCartOutlined,
  Search,
  LanguageOutlined,
  AppsOutlined,
} from '@mui/icons-material'
import CustomIconButton from '../common/CustomIconButton'
import { Login } from '../../pages'
import NavSearch from './NavSearch'

const buttons = [
  { name: 'فرش ماشینی' },
  { name: 'فرش دستبافت' },
  { name: 'تابلو فرش دستبافت' },
  { name: 'صنایع دستی' },
  { name: 'سایر' },
]
const NavContent = ({ setDrawerOpen }) => {
  return (
    <>
      <Box
        sx={{
          width: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <CustomIconButton
            color="buttons"
            icon={<AppsOutlined />}
            title="گزینه های بیشتر"
            onClick={() => setDrawerOpen(true)}
          />
          <Login />
        </Box>

        <Link href="/" underline="none">
          <Typography variant="h5" sx={{ color: 'title.light' }}>
            فروشگاه فرش
          </Typography>
        </Link>

        <Box sx={{ display: 'flex' }}>
          <Button
            sx={{
              fontSize: { xs: 'none', md: '20px' },
              borderRadius: 5,
              color: 'buttons.main',
            }}
          >
            FA
          </Button>
          <NavSearch />
        </Box>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              bgcolor: 'primary.light',
            }}
          />
        }
        spacing={2}
        sx={{
          mt: 2,
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      >
        {buttons.map((btn, index) => (
          <Button>
            {' '}
            <Typography variant="body1">{btn.name}</Typography>
          </Button>
        ))}
      </Stack>
    </>
  )
}
export default NavContent
