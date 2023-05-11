import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import {
  ShoppingCartOutlined,
  Search,
  Person,
  LanguageOutlined,
  AppsOutlined,
} from '@mui/icons-material'
import CustomIconButton from '../common/CustomIconButton'

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
          <CustomIconButton color="buttons" icon={<Person />} title="ورود" />
        </Box>

        <Typography variant="h5" sx={{ color: '#437FC7' }}>
          فروشگاه فرش
        </Typography>

        <Box>
          <CustomIconButton
            color="buttons"
            icon={<LanguageOutlined />}
            title="زبان"
          />
          <CustomIconButton color="buttons" icon={<Search />} title="جستجو" />
        </Box>
      </Box>
      {/* <Box
        sx={{
          width: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: 1,
          borderBottom: 1,
          borderColor: 'warning.main',
        }}
      > */}
      <Stack
        direction="row"
        justifyContent="space-between"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ color: 'divider.main' }}
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
      {/* </Box> */}
    </>
  )
}
export default NavContent
