import { TextField, Slide, InputAdornment, Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const SearchField = () => {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

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
    >
      <TextField
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ width: '95%', color: 'secondary.light' }}
        placeholder="جستجو"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),

          endAdornment: query.length > 0 && (
            <Button component={Link} to={`/search/${query}`}>
              جستجو
            </Button>
          ),
        }}
      />
    </Slide>
  )
}

export default SearchField
