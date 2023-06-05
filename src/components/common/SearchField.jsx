import { TextField, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchField = () => {
  return (
    <form>
      <TextField
        type="text"
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
        }}
      />
    </form>
  )
}

export default SearchField
