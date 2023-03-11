import { InputAdornment } from '@mui/material'
import { Face } from '@mui/icons-material'

export const adminFieldsData = (formik) => {
  return [
    {
      md: 6,
      name: 'fullName',
      label: 'نام و نام خانوادگی',
      formik,
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <Face />
          </InputAdornment>
        ),
      },
    },
    {
      phone: true,
      name: 'phone',
      formik,
      md: 6,
    },
    {
      pwd: true,
      name: 'password',
      formik,
    },
  ]
}
