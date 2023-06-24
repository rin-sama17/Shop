import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectLang } from '../../reducers/langSlice'
const SliderArrows = ({ slider, isHomeSlider }) => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('sm'))
  const lang = useSelector(selectLang)

  return (
    <>
      {!downMd && (
        <>
          <IconButton
            size="small"
            sx={{
              top: isHomeSlider ? { xs: '50%', md: '84%' } : '50%',
              left: isHomeSlider ? { xs: 10, md: 5 } : 10,
              position: 'absolute',
              color: 'whitesmoke',
              bgcolor: isHomeSlider ? 'none' : 'bgBlur.main',
              '&:hover': {
                bgcolor: 'bgBlur.main',
                color: 'whitesmoke',
              },
            }}
            onClick={() => slider.current.slickNext()}
          >
            {lang === 'en' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>

          <IconButton
            size="small"
            sx={{
              top: isHomeSlider ? { xs: '50%', md: '84%' } : '50%',
              right: isHomeSlider ? { xs: 10, md: 'auto' } : 10,
              left: isHomeSlider ? { xs: 'auto', md: 56 } : 'auto',
              position: 'absolute',
              color: 'whitesmoke',
              bgcolor: isHomeSlider ? 'none' : 'bgBlur.main',
              '&:hover': {
                bgcolor: 'bgBlur.main',
                color: 'whitesmoke',
              },
            }}
            onClick={() => slider.current.slickPrev()}
          >
            {lang === 'en' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
        </>
      )}
    </>
  )
}

export default SliderArrows
