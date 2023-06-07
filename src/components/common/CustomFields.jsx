import { useState, useRef, useMemo } from 'react'
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
  ListSubheader,
} from '@mui/material'

import { NumericFormat } from 'react-number-format'
import Grid from '@mui/material/Unstable_Grid2'
import {
  Visibility,
  VisibilityOff,
  Phone,
  ExpandMore,
} from '@mui/icons-material'

import { PatternFormat } from 'react-number-format'
import { useEffect } from 'react'
import { useGetCategoriesQuery } from '../../api'
import TextEditor from './TextEditor'

const fieldColor = {
  '& label.Mui-focused': {
    color: 'textBox.dark',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'textBox.main',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'textBox.main',
    },
    '&:hover fieldset': {
      borderColor: 'textBox.light',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'textBox.dark',
    },
  },
}
const CustomFields = ({
  pwd,
  name,
  phone,
  price,
  formik,
  submit,
  checkbox,
  category,
  categoryParents,
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
          sx={{
            height: 40,
            bgcolor: 'btnSubmit.main',
            color: 'btnSubmit.light',
            '&:hover': {
              bgcolor: 'btnSubmit.dark',
            },
          }}
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
        sx={{ direction: 'rtl', ...fieldColor }}
        format="09## ### ####"
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
        sx={{ color: 'textBox.main', ...fieldColor }}
        variant="outlined"
      />
    )
  } else if (pwd) {
    content = (
      <FormControl
        sx={{ width: 1, ...fieldColor }}
        variant="outlined"
        size="small"
      >
        <InputLabel>پسورد</InputLabel>
        <OutlinedInput
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
          type={showPassword ? 'text' : 'password'}
          size="small"
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
    const { data: categories = { data: [] } } = useGetCategoriesQuery()

    content = (
      <FormControl
        fullWidth
        size="small"
        sx={fieldColor}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
      >
        <InputLabel id={`category-label`}>
          {customLabel ? customLabel : 'دسته بندی'}
        </InputLabel>
        <Select
          name={name}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          labelId={`category-label`}
          input={
            <OutlinedInput label={customLabel ? customLabel : 'دسته بندی'} />
          }
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
              },
            },
          }}
        >
          {categories.data.map((category, index) => (
            <MenuItem value={category.id} key={index}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  } else if (checkbox) {
    content = (
      <FormControlLabel
        control={<Checkbox sx={{ color: 'textBox.dark' }} {...props} />}
        label={customLabel}
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
        sx={{ direction: 'ltr', ...fieldColor }}
        fullWidth
        size="small"
        name={name}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
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
