'use client'

import Typed from 'typed.js'
import { Typography, Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import Link from 'next/link'

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
        فروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال یو
        ای دیزاین شدهروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که با
        متریال یو ای دیزاین شده استروشگاه من یکلاراول است که با متریال یو ای
        دیزاین شده استروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که
        با متریال یو ای دتریال یو ای eeee
      </Typography>

      <Button
        component={Link}
        to="/products"
        color="secondary"
        sx={{ mt: 4, mb: 2 }}
      >
        ورود به فروشگاه من
      </Button>
    </>
  )
}
export default HomeDescription
