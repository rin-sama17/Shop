import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { langSeted, selectLang } from '../../reducers/langSlice'
import { Box, Card, Button, IconButton, Typography } from '@mui/material'

export default function NavLang() {
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()
  const lang = useSelector(selectLang)

  const handleChange = (lang) => {
    dispatch(langSeted(lang))
    setOpen(false)
  }

  return (
    <Box>
      <IconButton
        sx={{
          fontSize: { xs: 'none', md: '20px' },
          mx: 1,
          borderRadius: 5,
          color: 'btnNav.main',
          position: 'relative',
        }}
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        <Typography variant="h6"> {lang.toLocaleUpperCase()}</Typography>
      </IconButton>
      {open && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '-34px',
            pt: 4,
            zIndex: 1,
          }}
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
            }}
          >
            {['fa', 'en', 'ar'].map((lang, index) => (
              <Typography
                key={index}
                onClick={() => handleChange(lang)}
                sx={{
                  color: 'black',
                  whiteSpace: 'nowrap',
                  my: 0.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  '&:hover': {
                    color: 'tomato',
                    cursor: 'pointer',
                  },
                }}
              >
                {lang.toLocaleUpperCase()}
              </Typography>
            ))}
          </Card>
        </Box>
      )}
    </Box>
  )
}
