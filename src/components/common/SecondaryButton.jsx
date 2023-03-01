import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { AutoFixHigh } from '@mui/icons-material'
import { SwatchesPicker } from 'react-color'
import { CustomModal } from './'
import { useDispatch, useSelector } from 'react-redux'
import { getSecondary, secondaryChanged } from '../../reducers/themeSlice'

const SecondaryButton = () => {
  const secondary = useSelector(getSecondary)
  const [color, setColor] = useState(secondary)
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const setSecondaryColor = (color) => {
    dispatch(secondaryChanged(color))
  }

  return (
    <>
      <Button color="secondary" size="small" onClick={() => setOpen(true)}>
        <AutoFixHigh />
        <Typography variant="caption">تغییر رنگ</Typography>
      </Button>
      <CustomModal open={open} setOpen={setOpen}>
        <Stack justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{ mb: 2, bgcolor: color }}
            onClick={() => setSecondaryColor(color)}
          >
            تنظیم رنگ متن
          </Button>
          <SwatchesPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
          <Button
            sx={{ mt: 2, color: '#ce93d8' }}
            onClick={() => {
              setSecondaryColor('#ce93d8')
            }}
          >
            رنگ پیشفرض
          </Button>
        </Stack>
      </CustomModal>
    </>
  )
}

export default SecondaryButton
