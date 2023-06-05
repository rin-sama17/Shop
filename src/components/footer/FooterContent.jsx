import { Typography, Box, Container, IconButton, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import {
  Instagram,
  Telegram,
  LinkedIn,
  LocalPhone,
  FmdGood,
} from '@mui/icons-material'
import Link from 'next/link'

const socials = [
  { icon: <Instagram />, to: 'https://t.me/rin_sama', color: 'secondary' },
  { icon: <Telegram />, to: 'https://t.me/rin_sama', color: 'info' },
  { icon: <LinkedIn />, to: 'https://t.me/rin_sama', color: 'title' },
]

const routes = [
  { name: 'فروشگاه', to: '/product/index' },
  { name: 'مجله', to: '/post/index' },
  { name: 'نمایندگی', to: '/contract/index' },
  { name: 'درباره ما', to: 'about-us' },
]

const contacts = [
  { name: 'نازی اباد - میدان ابوذر خیابان مدائن پلاک 205', icon: <FmdGood /> },
  { name: '+21 5539 0048', icon: <LocalPhone /> },
]
const FooterContent = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
        sx={{
          ' .MuiSvgIcon-fontSizeMedium': {
            width: '20px !important',
            height: '20px !important',
          },
        }}
      >
        <Grid xs={12} md={4}>
          <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
            فروشگاه من
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="caprion"
              color="text.secondary"
              textAlign="left"
            >
              فروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که با
              متریال یو ای دیزاین شدهروشگاه من یک فروشگاه ساخته شده با ری اکت و
              لاراول است که با متریال یو ای دیزاین شده استروشگاه من یکلاراول است
              که با متریال یو ای دیزاین شده استروشگاه من یک فروشگاه ساخته شده با
              ری اکت و لاراول است که با متریال یو ای دتریال یو ای eeee
            </Typography>
            <Box sx={{ mt: 1 }}>
              {socials.map((social, index) => (
                <IconButton
                  key={index}
                  size="small"
                  component="a"
                  href={social.to}
                  target="_blank"
                  sx={{
                    ':hover': { color: `${social.color}.main` },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} md={3}>
          <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
            دسترسی سریع
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', pl: 1 }}>
            {routes.map((route, index) => (
              <Button
                key={index}
                size="small"
                component={Link}
                to={route.to}
                color="secondary"
                sx={{
                  mb: 0.5,
                  justifyContent: 'left',
                  color: 'text.secondary',
                  ':hover': { color: 'secondary.main' },
                }}
              >
                {route.name}
              </Button>
            ))}
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
            ارتباط با ما
          </Typography>
          {contacts.map((contact, index) => (
            <Box key={index} sx={{ display: 'flex', mb: 2 }}>
              {contact.icon}
              <Typography
                color="text.secondary"
                sx={{ direction: 'rtl', ml: 1 }}
              >
                {contact.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}
export default FooterContent
