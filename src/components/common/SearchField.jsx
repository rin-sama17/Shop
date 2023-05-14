import { TextField, InputAdornment, Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SearchField = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
    </form>
  )
}

export default SearchField
