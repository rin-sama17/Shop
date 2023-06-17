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
  ListItemText,
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
import TextEditor from './TextEditor'
import {
  fetchCategories,
  selectAllCategories,
} from '../../reducers/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { tagIdAdded, tagIdDeleted } from '../../reducers/tagSlice'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}
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
  selectTag,
  xs,
  sm,
  md,
  customLabel,
  ...props
}) => {
  const [value, setValue] = useState()
  const dispatch = useDispatch()
  const { t } = useTranslation()

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
          {t(customLabel)}
        </Button>
      </Grid>
    )
  }
  useEffect(() => {
    setValue(formik.values[`${name}`])
    if (category) {
      dispatch(fetchCategories())
    }
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
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
        sx={{ direction: 'rtl', ...fieldColor }}
        format="#### ### ####"
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
        label={t('قیمت')}
        placeholder={t('تومان')}
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
        <InputLabel>{t('پسورد')}</InputLabel>
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
          label={t('پسورد')}
          {...props}
        />
      </FormControl>
    )
  } else if (category) {
    const categories = useSelector(selectAllCategories)
    content = (
      <FormControl
        fullWidth
        size="small"
        sx={fieldColor}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
      >
        <InputLabel id={`category-label`}>{t('دسته بندی ها')}</InputLabel>
        <Select
          name={name}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          labelId={`category-label`}
          input={<OutlinedInput label={t('دسته بندی ها')} />}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
              },
            },
          }}
        >
          {categories.map((category, index) => (
            <MenuItem value={category.id} key={index}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  } else if (selectTag) {
    const tags = [
      { id: 1, name: 'Oliver Hansen' },
      { id: 2, name: 'Van Henry' },
      { id: 3, name: 'April Tucker' },
      { id: 4, name: 'Ralph Hubbard' },
      { id: 5, name: 'Omar Alexander' },
      { id: 6, name: 'Carlos Abbott' },
      { id: 7, name: 'Miriam Wagner' },
      { id: 8, name: 'Bradley Wilkerson' },
      { id: 9, name: 'Virginia Andrews' },
      { id: 10, name: 'Kelly Snyder' },
    ]
    const saveId = (id, canSave) => {
      if (canSave) {
        dispatch(tagIdAdded(id))
      } else {
        dispatch(tagIdDeleted(id))
      }
    }
    content = (
      <FormControl
        fullWidth
        size="small"
        sx={fieldColor}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
      >
        <InputLabel id="select-tag">{t('تگ')}</InputLabel>
        <Select
          labelId="select-tag"
          multiple
          name={name}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          input={<OutlinedInput label={t('تگ')} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tags.map((tag, index) => (
            <MenuItem
              key={index}
              value={tag.name}
              onClick={() =>
                saveId(
                  tag.id,
                  !(formik.values[`${name}`].indexOf(tag.name) > -1),
                )
              }
            >
              <Checkbox
                checked={formik.values[`${name}`].indexOf(tag.name) > -1}
              />
              <ListItemText primary={tag.name} />
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
