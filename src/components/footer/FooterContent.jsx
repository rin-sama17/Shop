import { Link } from 'react-router-dom'
import {
  Typography,
  Box,
  Divider,
  Stack,
  Container,
  IconButton,
  Button,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { ShowTime, Spinner } from '../common'
import { useGetPostsQuery, useGetDescriptionQuery } from '../../api'

import {
  Instagram,
  Telegram,
  LinkedIn,
  LocalPhone,
  Newspaper,
  InfoOutlined,
  Apartment,
  FmdGood,
} from '@mui/icons-material'

const socials = [
  { icon: <Instagram />, to: 'https://t.me/rin_sama' },
  { icon: <Telegram />, to: 'https://t.me/rin_sama' },
  { icon: <LinkedIn />, to: 'https://t.me/rin_sama' },
]

const routes = [
  { name: 'فروشگاه', to: '/products' },
  { name: 'مجله', to: '/posts' },
  { name: 'نمایندگی', to: '/contracts' },
  { name: 'درباره ما', to: 'about-us' },
]

const contacts = [
  { name: 'نازی اباد - میدان ابوذر خیابان مدائن پلاک 205', icon: <FmdGood /> },
  { name: '+21 5539 0048', icon: <LocalPhone /> },
]
const FooterContent = () => {
  const { data: description, isLoading } = useGetDescriptionQuery()
  if (isLoading) {
    return <Spinner />
  }
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
              {description.aboutUs}
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
                    ':hover': { color: 'primary.main' },
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
                sx={{
                  mb: 0.5,
                  justifyContent: 'left',
                  color: 'text.secondary',
                  ':hover': { color: 'primary.main' },
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
