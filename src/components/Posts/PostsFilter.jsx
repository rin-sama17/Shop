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
import { categoris } from '../../constants/categoris'

import { CustomDivider } from '../common'
import SearchField from '../common/SearchField'

export default function PostsFilter() {
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
      <List sx={{ color: 'text.primary' }}>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemText primary="دسته بندی" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <SearchField small />
          {categoris.map((item, index) => (
            <List component="div" key={index} disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>
      </List>
    </Box>
  )
}
