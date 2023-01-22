import { TextField, Slide, InputAdornment } from '@mui/material'

import { Search, HighlightOff } from '@mui/icons-material'
import { useState, useEffect } from 'react'
const SearchField = ({ setSearchBox, closeable, small, ...props }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <Slide
      direction="down"
      in={loading}
      style={{ transitionDelay: loading ? '80ms' : '0ms' }}
      {...props}
    >
      <TextField
        variant="outlined"
        size={small ? 'small' : 'normal'}
        sx={{ width: '95%', color: 'secondary.light' }}
        placeholder="جستجو"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),

          endAdornment: closeable ? (
            <InputAdornment position="end" onClick={() => setSearchBox(false)}>
              <HighlightOff />
            </InputAdornment>
          ) : null,
        }}
      />
    </Slide>
  )
}

export default SearchField
