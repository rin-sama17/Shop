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
import { Visibility, VisibilityOff } from '@mui/icons-material'

const CustomFields = ({
  fieldType = 'text',
  xs,
  sm,
  name,
  formik,
  fieldLabel,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  let content
  if (fieldType === 'text') {
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
  } else if (fieldType === 'pwd') {
    content = (
      <FormControl sx={{ width: 1 }} variant="outlined" size="small">
        <InputLabel>{fieldLabel}</InputLabel>
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
          label={fieldLabel}
          {...props}
        />
      </FormControl>
    )
  }
  return (
    <Grid xs={xs ? xs : 12} sm={sm}>
      {content}
    </Grid>
  )
}

export default CustomFields
