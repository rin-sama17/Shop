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
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material'

import { NumericFormat } from 'react-number-format'
import Grid from '@mui/material/Unstable_Grid2'
import { Visibility, VisibilityOff, Phone } from '@mui/icons-material'

import { PatternFormat } from 'react-number-format'
import { useEffect } from 'react'
import { useGetCategorysQuery } from '../../api'
import TextEditor from './TextEditor'

const CustomFields = ({
  pwd,
  name,
  phone,
  price,
  formik,
  submit,
  checkbox,
  category,
  textEditor,
  xs,
  sm,
  md,
  customLabel,
  ...props
}) => {
  const [value, setValue] = useState()
  if (submit === true) {
    return (
      <Grid xs={xs ? xs : 12} sm={sm ? sm : null} md={md ? md : null}>
        <Button
          fullWidth
          type="submit"
          size="small"
          variant="contained"
          sx={{ height: 1 }}
          {...props}
        >
          {customLabel}
        </Button>
      </Grid>
    )
  }

  useEffect(() => {
    setValue(formik.values[`${name}`])
  }, [])

  useEffect(() => {
    if (formik.values[`${name}`] && formik.values[`${name}`] === '') {
      setValue('')
    }
  }, [formik.values[`${name}`]])
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => setValue(e.target.value)
  const handleBlur = () => {
    if (phone) {
      const numberedPhone = value.split(' ').join('')
      formik.setFieldValue(name, numberedPhone)
    } else if (price) {
      const numbredPrice = Number(value.split(',').join(''))
      formik.setFieldValue(name, numbredPrice)
    } else {
      formik.setFieldValue(name, value)
    }
  }
  let content
  if (phone) {
    content = (
      <PatternFormat
        customInput={TextField}
        fullWidth
        size="small"
        label="شماره موبایل"
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        color="secondary"
        sx={{ direction: 'rtl' }}
        format="098 ### ### ####"
        mask="_"
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
        valueIsNumericString={true}
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
      <FormControl sx={{ width: 1 }} variant="outlined">
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
        <InputLabel id={`category-label`}>دسته بندی</InputLabel>
        <Select
          name={name}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          labelId={`category-label`}
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
          {options.map((option, index) => (
            <MenuItem value={option.id} key={index}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  } else if (checkbox) {
    content = (
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            value={formik.values[`${name}`]}
            checked={formik.values[`${name}`]}
            onChange={formik.handleChange}
          />
        }
        {...props}
      />
    )
  } else if (textEditor) {
    content = (
      <TextEditor
        formik={formik}
        name={name}
        value={formik.values[`${name}`]}
      />
    )
  } else {
    content = (
      <TextField
        sx={{ direction: 'ltr' }}
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
