import { useState } from 'react'
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
  ListItemText,
} from '@mui/material'

import { NumericFormat } from 'react-number-format'
import Grid from '@mui/material/Unstable_Grid2'
import { Visibility, VisibilityOff, Phone } from '@mui/icons-material'

import { PatternFormat } from 'react-number-format'
import { useEffect } from 'react'
import TextEditor from './TextEditor'
import {
  selectAllCategories,
  selectUseAbleCategories,
} from '../../reducers/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  selectAllTags,
  selectTag_id,
  tagIdAdded,
  tagIdDeleted,
} from '../../reducers/tagSlice'

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
  addCategory,
  categoryParents,
  textEditor,
  selectTag,
  isBtn,
  custom,
  customContent,
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
          type={isBtn ? 'button' : 'submit'}
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
  } else if (custom === true) {
    return (
      <Grid xs={xs ? xs : 12} sm={sm ? sm : null} md={md ? md : null}>
        {customContent}
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
    const lang = localStorage.getItem('lang') || 'fa'
    const InputProps =
      lang == 'en'
        ? {
            endAdornment: (
              <InputAdornment position="end">
                <Phone />
              </InputAdornment>
            ),
          }
        : {
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }
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
        sx={{ direction: lang != 'en' ? 'rtl' : 'ltr', ...fieldColor }}
        format="#### ### ####"
        mask="_"
        InputProps={InputProps}
        placeholder={t('شماره موبایل')}
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
        <InputLabel htmlFor="pwd">{t('پسورد')}</InputLabel>
        <OutlinedInput
          id="pwd"
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
        />
      </FormControl>
    )
  } else if (category) {
    const createCategory = useSelector(selectUseAbleCategories)
    const selectCategory = useSelector(selectAllCategories)

    let categories
    if (addCategory) {
      categories = createCategory
    } else {
      categories = selectCategory
    }

    content = (
      <FormControl
        fullWidth
        size="small"
        sx={fieldColor}
        error={Boolean(formik.touched[`${name}`] && formik.errors[`${name}`])}
      >
        <InputLabel id="category-label">{t('دسته بندی ها')}</InputLabel>
        <Select
          name={name}
          value={formik.values[`${name}`]}
          onChange={formik.handleChange}
          labelId="category-label"
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
    const tags = useSelector(selectAllTags)

    const itemTags = useSelector(selectTag_id)
    const itemTagIds = itemTags.map((tag) => tag.id)

    const saveId = (tag, canSave) => {
      if (canSave) {
        dispatch(tagIdAdded(tag))
      } else {
        dispatch(tagIdDeleted(tag.id))
      }
    }

    const handleNames = (tags) => {
      let names = tags?.map((tag) => tag.name)

      return names.join(', ')
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
          value={itemTags}
          // onChange={handleChange}
          input={<OutlinedInput label={t('تگ')} />}
          renderValue={(selected) => handleNames(selected)}
          MenuProps={MenuProps}
        >
          {tags.map((tag, index) => (
            <MenuItem
              key={index}
              value={tag}
              onClick={() => saveId(tag, !(itemTagIds.indexOf(tag.id) > -1))}
            >
              <Checkbox checked={itemTagIds.indexOf(tag.id) > -1} />
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
