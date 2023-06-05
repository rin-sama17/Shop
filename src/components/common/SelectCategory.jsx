import { getCategories } from '@/api'
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@mui/material'

const SelectCategory = async ({ value, setValue }) => {
  const { data } = await getCategories()

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category">دسته بندی</InputLabel>
      <Select
        name="category"
        color="secondary"
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
        {data.map((option, index) => (
          <MenuItem value={option.name} key={index}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectCategory
