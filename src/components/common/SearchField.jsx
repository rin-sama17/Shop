import {
  TextField,
  InputAdornment,
  Button,
  Grow,
  Collapse,
} from '@mui/material'
import { CheckBoxOutlineBlank, Close, Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomIconButton from './CustomIconButton'
const SearchField = ({ downMd }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }
  const handleCancle = () => {
    setQuery('')
  }
  const checked = Boolean(query.length > 0)
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{ transition: 'width 1s', width: checked ? '300px' : '250px' }}
    >
      <TextField
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        size={downMd ? 'small' : 'large'}
        fullWidth
        sx={{ color: 'secondary.light' }}
        placeholder="جستجو"
        InputProps={{
          style: {
            paddingLeft: 3,
            borderRadius: '40px',
          },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),

          endAdornment: query.length > 0 && (
            <CustomIconButton
              title="انصراف"
              icon={<Close />}
              onClick={handleCancle}
            />
          ),
        }}
      />
    </form>
  )
}

export default SearchField
