import { FmdGood, Instagram, LocalPhone, Telegram } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { PatternFormat } from 'react-number-format'
import { useSelector } from 'react-redux'
import { selectLang } from '../reducers/langSlice'

const socials = [
  { icon: <Instagram />, to: 'https://t.me/rin_sama', color: 'primary' },
  { icon: <Telegram />, to: 'https://t.me/rin_sama', color: 'primary' },
]

const AboutUs = () => {
  const { t } = useTranslation()
  const lang = useSelector(selectLang)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('فرش لبخند')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="caprion"
          sx={{ color: 'whtesmoke' }}
          textAlign="left"
        >
          فرش لبخند یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال یو
          ای دیزاین شدهروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که
          با متریال یو ای دیزاین شده استروشگاه من یکلاراول است که با متریال یو
          ای دیزاین شده استروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است
          که با متریال یو ای دتریال یو ای eeee
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mt: 2 }}>
        {t('تماس با ما')}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography color="text.secondary" variant="body1">
          {t('ادرس')}:
        </Typography>
        <Typography sx={{ direction: 'inherit', ml: 1, color: 'whtesmoke' }}>
          آران و بیدگل شهرک صنعتی سلیمان صباحی بلوار گارگر فرش لبخند
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography color="text.secondary" variant="body1">
          {t('شماره تماس')}:
        </Typography>
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography color="text.secondary" variant="body1">
          {t('شبکه های اجتماعی')}:
        </Typography>
        <Box sx={{ mx: 1 }}>
          {socials.map((social, index) => (
            <IconButton
              key={index}
              size="small"
              component="a"
              href={social.to}
              target="_blank"
              sx={{
                ml: 1,
                bgcolor: 'bgSidebar.dark',
                color: `${social.color}.main`,
                ':hover': { bgcolor: `${social.color}.main`, color: 'white' },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUs
