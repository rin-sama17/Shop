import { TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'

const CustomTextField = ({ xs, sm, name, formik, ...props }) => {
  return (
    <Grid xs={xs ? xs : 12} sm={sm}>
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
    </Grid>
  )
}

export default CustomTextField
