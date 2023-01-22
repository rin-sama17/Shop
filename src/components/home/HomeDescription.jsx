import { useEffect, useRef, useState } from 'react'
import { Typography, Button } from '@mui/material'
import TextTransition, { presets } from 'react-text-transition'
import { Link as RouterLink } from 'react-router-dom'
import Typed from 'typed.js'
const HomeDescription = () => {
  const [index, setIndex] = useState(0)
  const nameEl = useRef(null)
  const strings = ['محصولات متنوع', 'دسترسی راحت', 'پرداخت ایمن', 'تنوع بالا']

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ['فروشگاه من'],
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
  }, [])

  return (
    <>
      <Typography variant="h4" ref={nameEl} color="text.primary"></Typography>
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
          {strings[index % strings.length]}
        </Typography>
      </TextTransition>

      <Typography
        variant="body2"
        sx={{
          width: '60%',
          mt: 2,
        }}
        color="text.secondary"
      >
        فروشگاه من یک فروشگاه ساخته شده توسط ری اکت و لاراول میباشد همچنین
        دیزاین این سایت توسط متریال یو ای انجام شده است و درحال توصعه میباشد
      </Typography>

      <Button
        component={RouterLink}
        to="/products"
        color="secondary"
        sx={{ my: 2 }}
      >
        ورود به فروشگاه من
      </Button>
    </>
  )
}
export default HomeDescription
