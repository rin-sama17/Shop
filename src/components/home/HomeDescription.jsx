import Typed from 'typed.js'
import { Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'
import { Store } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const HomeDescription = () => {
  const [index, setIndex] = useState(0)
  const { t, i18n } = useTranslation()
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
  const nameEl = useRef(null)
  const strings = ['محصولات متنوع', 'دسترسی راحت', 'پرداخت ایمن', 'تنوع بالا']

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [t('فروشگاه من')],
      typeSpeed: 1,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    })

    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
    return () => {
      typedName.destroy()
      clearTimeout(intervalId)
    }
  }, [t])

  return (
    <>
      <Typography
        variant="h4"
        ref={nameEl}
        color="text.primary"
        sx={{ mt: 2 }}
      ></Typography>
      <TextTransition springConfig={presets.wobbly}>
        <Typography
          color="secondary"
          variant="h5"
          sx={{
            mt: 2,
            textDecoration: 'underline',
            textDecorationColor: 'secondary.main',
          }}
        >
          {t(strings[index % strings.length])}
        </Typography>
      </TextTransition>

      <Typography
        variant={downMd ? 'caption' : 'body2'}
        sx={{
          width: '60%',
          mt: 2,
        }}
        color="text.secondary"
      >
        فروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال یو
        ای دیزاین شدهروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که با
        متریال یو ای دیزاین شده استروشگاه من یکلاراول است که با متریال یو ای
        دیزاین شده استروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که
        با متریال یو ای دتریال یو ای eeee
      </Typography>

      <Button
        component={Link}
        to="/products"
        color="warning"
        sx={{ width: 190, my: 3 }}
        variant="contained"
      >
        <Store />
        <Typography variant="subtitle2" sx={{ ml: 1 }}>
          {t('ورود به فروشگاه')}
        </Typography>
      </Button>
    </>
  )
}
export default HomeDescription
