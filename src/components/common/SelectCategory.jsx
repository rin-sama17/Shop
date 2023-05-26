import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@mui/material'
import { useGetCategoriesQuery } from '../../api'

const SelectCategory = ({ value, setValue }) => {
  const { data: options = [] } = useGetCategoriesQuery()

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category">دسته بندی</InputLabel>
      <Select
        name="category"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        labelId="category"
        input={<OutlinedInput label="دسته بندی" />}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: 250,
            },
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem value={option.name} key={index}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectCategory
