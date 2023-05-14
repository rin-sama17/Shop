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
        <Box>
          <CustomIconButton
            color="buttons"
            icon={<AppsOutlined />}
            title="گزینه های بیشتر"
            onClick={() => setDrawerOpen(true)}
          />
          <Login />
        </Box>

        <Link href="/" underline="none">
          <Typography variant="h5" sx={{ color: 'title.main' }}>
            فروشگاه فرش
          </Typography>
        </Link>

        <Box>
          <CustomIconButton
            color="buttons"
            icon={<LanguageOutlined />}
            title="زبان"
          />
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
            sx={{ bgcolor: 'primary.light' }}
          />
        }
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Button>فرش ماشینی</Button>
        <Button>فرش دستبافت</Button>
        <Button>تابلو فرش دستبافت</Button>
        <Button>صنایع دستی</Button>
        <Button>سایر</Button>
      </Stack>
    </>
  )
}
export default NavContent
