import { useState, memo, useMemo } from 'react'
import {
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from '@mui/material'

import { NumericFormat } from 'react-number-format'
import Grid from '@mui/material/Unstable_Grid2'
import { Visibility, VisibilityOff, Phone } from '@mui/icons-material'

import { PatternFormat } from 'react-number-format'
import SearchField from './SearchField'
import { useEffect } from 'react'
import { useGetCategorysQuery } from '../../api'

const CustomFields = ({
  pwd,
  phone,
  price,
  category,
  customLabel,
  xs,
  sm,
  md,
  name,
  formik,
  ...props
}) => {
  const [value, setValue] = useState()
  useEffect(() => {
    setValue(formik.values[`${name}`])
  }, [])

  useEffect(() => {
    if (formik.values[`${name}`] === '') {
      setValue('')
    }
  }, [formik.values[`${name}`]])
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => setValue(e.target.value)
  const handleBlur = () => {
    formik.setFieldValue(name, value)
  }
  let content
  if (phone) {
    content = (
      <PatternFormat
        customInput={TextField}
        fullWidth
        label="شماره موبایل"
        size="small"
        name={name}
        onBlur
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
  } else if (price) {
    content = (
      <NumericFormat
        allowLeadingZeros
        thousandSeparator=","
        customInput={TextField}
        fullWidth
        size="small"
        name={name}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        label="قیمت"
        placeholder="به ریال"
        displayType="input"
        color="secondary"
        variant="outlined"
      />
    )
  } else if (pwd) {
    content = (
      <FormControl sx={{ width: 1 }} variant="outlined" size="small">
        <InputLabel>پسورد</InputLabel>
        <OutlinedInput
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
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
  } else if (category) {
    const { data: options = [] } = useGetCategorysQuery()
    content = (
      <FormControl
        fullWidth
        size="small"
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
      >
        <InputLabel id={`${name}-label`}>دسته بندی</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          labelId={`${name}-label`}
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
          <MenuItem>
            <SearchField small />
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem value={option.name} key={index}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  } else {
    content = (
      <TextField
        fullWidth
        size="small"
        name={name}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
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
