import { TextField, Slide, InputAdornment, Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const SearchField = () => {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
          size="large"
          fullWidth
          sx={{ color: 'secondary.light' }}
          placeholder="جستجو"
          InputProps={{
            style: {
              paddingLeft: 3,
            },
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),

            endAdornment: query.length > 0 && (
              <Button type="submit">جستجو</Button>
            ),
          }}
        />
      </Slide>
    </form>
  )
}

export default SearchField
