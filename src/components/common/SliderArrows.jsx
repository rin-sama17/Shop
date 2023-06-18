import { useMediaQuery, useTheme } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box } from '@mui/material'
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
          <Box
            size="small"
            sx={{
              top: '50%',
              left: 10,
              position: 'absolute',
            }}
            onClick={() => slider.current.slickNext()}
          >
            {lang === 'en' ? (
              <KeyboardArrowLeft sx={{ color: 'white' }} />
            ) : (
              <KeyboardArrowRight sx={{ color: 'white' }} />
            )}
          </Box>
          <Box
            size="small"
            sx={{
              top: '50%',
              right: 10,
              position: 'absolute',
            }}
            onClick={() => slider.current.slickPrev()}
          >
            {lang === 'en' ? (
              <KeyboardArrowRight sx={{ color: 'white' }} />
            ) : (
              <KeyboardArrowLeft sx={{ color: 'white' }} />
            )}
          </Box>
        </>
      )}
    </>
  )
}

export default SliderArrows
