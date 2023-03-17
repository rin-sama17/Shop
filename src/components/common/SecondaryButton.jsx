import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { AutoFixHigh } from '@mui/icons-material'
import { BlockPicker } from 'react-color'
import { CustomModal } from './'
import { useDispatch, useSelector } from 'react-redux'
import {
  fontChanged,
  getFont,
  getSecondary,
  secondaryChanged,
} from '../../reducers/themeSlice'
import { colors } from '../../constants/secondaryPickerColors'
import Grid from '@mui/material/Unstable_Grid2'
const SecondaryButton = () => {
  const secondary = useSelector(getSecondary)
  const currentFont = useSelector(getFont)
  const [color, setColor] = useState(secondary)
  const [open, setOpen] = useState(false)
  const [font, setFont] = useState(currentFont)

  const dispatch = useDispatch()

  const setSecondaryColor = (color) => {
    dispatch(secondaryChanged(color))
  }
  useEffect(() => {
    if (font !== '') {
      dispatch(fontChanged(font))
    }
  }, [font])
  const fonts = ['tanha', 'vazir', 'wazin', 'roboto']
  return (
    <>
      <Button color="secondary" size="small" onClick={() => setOpen(true)}>
        <AutoFixHigh />
        <Typography variant="caption">شخصی سازی</Typography>
      </Button>
      <CustomModal open={open} setOpen={setOpen} width="50%">
        <Grid container spacing={2} sx={{ height: '70vh', overflowY: 'auto' }}>
          <Grid xs={12} md={6}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              sx={{ mb: 1 }}
              onClick={() => setSecondaryColor(color)}
            >
              تنظیم رنگ متن
            </Button>
            <Button
              fullWidth
              sx={{ color: '#ce93d8' }}
              onClick={() => {
                setSecondaryColor('#ce93d8')
              }}
            >
              رنگ پیشفرض
            </Button>
            <FormControl fullWidth size="small">
              <InputLabel>فونت</InputLabel>
              <Select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                input={<OutlinedInput label="فونت" />}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 48 * 4.5 + 8,
                      width: 250,
                    },
                  },
                }}
              >
                {fonts.map((font, index) => (
                  <MenuItem value={font} key={index}>
                    {font}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12} md={6} sx={{ direction: 'rtl' }}>
            <BlockPicker
              colors={colors}
              width="100%"
              triangle="hide"
              color={color}
              onChangeComplete={(color) => setColor(color.hex)}
            />
          </Grid>
        </Grid>
      </CustomModal>
    </>
  )
}

export default SecondaryButton
