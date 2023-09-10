import Typed from 'typed.js'
import { Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TextTransition, { presets } from 'react-text-transition'
import { Store } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const HomeDescription = () => {
  const { t, i18n } = useTranslation()

  return (
    <Button
      component={Link}
      to="/products"
      color="warning"
      sx={{ width: 196, my: 3 }}
      variant="contained"
    >
      <Store />
      <Typography variant="subtitle2" sx={{ ml: 1 }}>
        {t('ورود به فروشگاه')}
      </Typography>
    </Button>
  )
}
export default HomeDescription
