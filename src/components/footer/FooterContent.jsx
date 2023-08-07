import { Link } from 'react-router-dom'
import { Typography, Box, Container, IconButton, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import {
  Instagram,
  Telegram,
  LinkedIn,
  LocalPhone,
  FmdGood,
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { PatternFormat } from 'react-number-format'
import { useSelector } from 'react-redux'
import { selectLang } from '../../reducers/langSlice'

const socials = [
  { icon: <Instagram />, to: 'https://t.me/rin_sama', color: 'primary' },
  { icon: <Telegram />, to: 'https://t.me/rin_sama', color: 'primary' },
  { icon: <LinkedIn />, to: 'https://t.me/rin_sama', color: 'primary' },
]

const routes = [
  { name: 'فروشگاه', to: '/products' },
  { name: 'وبلاگ', to: '/posts' },
  { name: 'نمایندگی ها', to: '/agencies' },
  { name: 'درباره ما', to: 'about-us' },
]
const FooterContent = () => {
  const { t } = useTranslation()
  const lang = useSelector(selectLang)

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
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t('فرش لبخند')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="caprion"
              sx={{ color: 'whtesmoke' }}
              textAlign="left"
            >
              فرش لبخند یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال
              یو ای دیزاین شدهروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول
              است که با متریال یو ای دیزاین شده استروشگاه من یکلاراول است که با
              متریال یو ای دیزاین شده استروشگاه من یک فروشگاه ساخته شده با ری
              اکت و لاراول است که با متریال یو ای دتریال یو ای eeee
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
                    color: 'white',
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
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t('دسترسی سریع')}
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
                  color: 'white',
                  ':hover': { color: 'primary.main' },
                }}
              >
                {t(route.name)}
              </Button>
            ))}
          </Box>
        </Grid>

        <Grid xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t('تماس با ما')}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FmdGood />
            <Typography
              sx={{ direction: 'inherit', ml: 1, color: 'whtesmoke' }}
            >
              آران و بیدگل شهرک صنعتی سلیمان صباحی بلوار گارگر فرش لبخند
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocalPhone />
            <Typography
              sx={{
                direction: lang != 'en' ? 'rtl' : 'ltr',
                ml: 1,
                color: 'whtesmoke',
              }}
            >
              <PatternFormat
                displayType="text"
                value={2154750998}
                format="021 #### ####"
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
export default FooterContent
