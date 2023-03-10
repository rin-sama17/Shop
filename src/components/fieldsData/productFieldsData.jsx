import { Typography, InputAdornment } from '@mui/material'

import { Percent } from '@mui/icons-material'
import { toRial } from '../../helpers'

export const productFieldsData = (formik) => {
  const convertPrice = (a, b) => {
    if (typeof a !== 'number') {
      a = Number(a.split(',').join(''))
    }
    if (typeof b !== 'number') {
      b = Number(b)
    }
    if (a > b) {
      return Math.round(a - (a * b) / 100)
    } else {
      return '0'
    }
  }
  return [
    { sm: 4, formik, name: 'name', label: 'نام محصول' },
    { price: true, sm: 4, formik, name: 'price' },
    {
      sm: 4,
      formik,
      name: 'discount',
      label: 'تخفیف',
      type: 'number',
      helperText: (
        <Typography variant="caption">
          قیمت کالا بعد از تخفیف :
          {formik.errors.discount
            ? formik.errors.discount
            : toRial(
                convertPrice(formik.values?.price, formik.values?.discount),
              )}
        </Typography>
      ),
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <Percent />
          </InputAdornment>
        ),
      },
    },
    {
      sm: 5,
      category: true,
      formik,
      name: 'category',
    },
    {
      sm: 7,
      formik,
      name: 'tags',
      label: 'برچسب ها',
      helperText: 'برچسب ها را با / از هم جدا کنید',
    },
    {
      sm: 5,
      formik,
      name: 'stock',
      label: 'تعداد',
      helperText: 'موجودی کالا',
      type: 'number',
    },
    {
      sm: 12,
      formik,
      name: 'details',
      multiline: true,
      rows: 4,
      label: 'توضیحات',
    },
  ]
}

export default productFieldsData
