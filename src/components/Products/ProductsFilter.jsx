import { useState } from 'react'
import {
  Typography,
  Box,
  Slider,
  List,
  ListItemButton,
  Collapse,
  ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

import { CustomDivider, CustomFields } from '../common'
import SearchField from '../common/SearchField'

const ProductsFilter = ({ data, setData }) => {
  const [value, setValue] = useState([0, 37])
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <CustomDivider label="فیلتر بر اساس قیمت" />
      <Box sx={{ px: 1 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'text.primary',
        }}
      >
        <Typography variant="caption">ارزان ترین </Typography>

        <Typography variant="caption">گران ترین </Typography>
      </Box>
      <Typography variant="caption" color="secondary">
        از {value[0]} تا {value[1]} تومان
      </Typography>
      <CustomDivider label="فیلتر بر اساس دسته بندی" />
      <CustomFields category />
    </Box>
  )
}
export default ProductsFilter
