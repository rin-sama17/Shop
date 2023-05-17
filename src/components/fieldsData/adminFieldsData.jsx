import { InputAdornment } from '@mui/material'
import { Face } from '@mui/icons-material'

export const adminFieldsData = (formik) => {
  return [
    {
      md: 5,
      name: 'title',
      label: 'عنوان',
      formik,
    },
    {
      md: 5,
      formik,
      name: 'details',
      label: 'توضیحات',
    },
    {
      md: 2,
      submit: true,
      customLabel: 'ثبت',
    },
    {
      xs: 3,
      checkbox: true,
      name: 'addPost',
      formik,
      label: 'افزودن پست',
    },
    {
      xs: 3,
      checkbox: true,
      name: 'editPost',
      formik,
      label: 'ویرایش پست',
    },
  ]
}
