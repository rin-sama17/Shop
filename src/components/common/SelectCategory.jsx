import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useGetCategoriesQuery } from '../../api'

const SelectCategory = ({ value, setValue }) => {
  const { data: options = { data: [] } } = useGetCategoriesQuery()
  const { t } = useTranslation()

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category">{t('دسته بندی')}</InputLabel>
      <Select
        name="category"
        color="secondary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        labelId="category"
        input={<OutlinedInput label={t('دسته بندی')} />}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: 250,
            },
          },
        }}
      >
        {options.data.map((option, index) => (
          <MenuItem value={option.id} key={index}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectCategory
