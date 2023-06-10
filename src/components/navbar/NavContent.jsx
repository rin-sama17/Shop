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
import { bg } from '../../assets'

const buttons = [
  { name: 'دسته بندی ها' },
  { name: 'نمایندگی' },
  { name: 'وبلاگ' },
  { name: 'فروشگاه' },
  { name: 'درباره ما' },
]
const NavContent = ({ setDrawerOpen }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg} )`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: 1,
          px: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomIconButton
            color="btnNav"
            icon={<AppsOutlined />}
            title="گزینه های بیشتر"
            onClick={() => setDrawerOpen(true)}
          />
          <Link href="/" underline="none">
            <Typography variant="h5" sx={{ ml: 1, color: 'title.light' }}>
              فروشگاه فرش
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', py: 2 }}>
          <Button
            sx={{
              fontSize: { xs: 'none', md: '20px' },
              borderRadius: 5,
              color: 'btnNav.main',
            }}
          >
            FA
          </Button>
          <NavSearch />
          <Login />
        </Box>
      </Box>
      <Box
        sx={{
          width: 1,
          py: 2,
          borderRadius: {
            xs: 'none',
            md: '0 0 20px  20px ',
          },
          bgcolor: 'bgcolor.dark',
        }}
      >
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
            width: '70%',
            m: 'auto',

            display: {
              xs: 'none',
              sm: 'flex',
            },
          }}
        >
          {buttons.map((btn, index) => (
            <Button sx={{ color: 'btnNav.dark' }} key={index}>
              <Typography variant="body1">{btn.name}</Typography>
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  )
}
export default NavContent
