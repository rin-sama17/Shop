import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectLang } from '../../reducers/langSlice'
const SliderArrows = ({ slider }) => {
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
              top: { xs: '50%', md: '84%' },
              left: { xs: 10, md: 5 },
              position: 'absolute',
              color: 'white',
              '&:hover': {
                bgcolor: 'bgBlur.main',
              },
            }}
            onClick={() => slider.current.slickNext()}
          >
            {lang === 'en' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>

          <IconButton
            size="small"
            sx={{
              top: { xs: '50%', md: '84%' },
              right: { xs: 10, md: 'auto' },
              left: { xs: 'auto', md: 56 },
              position: 'absolute',
              color: 'white',
              '&:hover': {
                bgcolor: 'bgBlur.main',
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
