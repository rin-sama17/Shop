import { useState } from 'react'
import {
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2'
import { Visibility, VisibilityOff, Phone } from '@mui/icons-material'

import { PatternFormat } from 'react-number-format'

const CustomFields = ({ pwd, phone, xs, sm, md, name, formik, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  let content
  if (phone) {
    content = (
      <PatternFormat
        customInput={TextField}
        fullWidth
        label="شماره موبایل"
        size="small"
        name={name}
        value={formik.values[`${name}`]}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        onChange={formik.handleChange}
        color="secondary"
        sx={{ direction: 'rtl' }}
        format="+98 ### ### ####"
        allowEmptyFormatting
        mask="-"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    )
  } else if (pwd) {
    content = (
      <FormControl sx={{ width: 1 }} variant="outlined" size="small">
        <InputLabel>پسورد</InputLabel>
        <OutlinedInput
          name={name}
          value={formik.values[`${name}`]}
          error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
          onChange={formik.handleChange}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prevShow) => !prevShow)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="پسورد"
          {...props}
        />
      </FormControl>
    )
  } else {
    content = (
      <TextField
        fullWidth
        size="small"
        name={name}
        value={formik.values[`${name}`]}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        onChange={formik.handleChange}
        color="secondary"
        {...props}
      />
    )
  }
  return (
    <Grid xs={xs ? xs : 12} sm={sm ? sm : null} md={md ? md : null}>
      {content}
    </Grid>
  )
}

export default CustomFields
