import { Typography, InputAdornment } from '@mui/material'

import { Percent } from '@mui/icons-material'
import { toRial } from '../../helpers'
import { useTranslation } from 'react-i18next'

export const productFieldsData = (formik) => {
  const { t } = useTranslation()
  const convertPrice = (a, b) => {
    if (typeof a !== 'number') {
      a = Number(a?.split(',').join(''))
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
      label: 'تخفیف(به درصد)',
      type: 'number',
      helperText: (
        <Typography variant="caption">
          {t('قیمت کالا بعد از تخفیف')} :
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
      sm: 12,
      formik,
      name: 'description',
      multiline: true,
      helperText: t('توضیح مختصری درباره محصول خود ارائه دهید'),
      rows: 4,
      label: 'توضیحات',
    },
    {
      sm: 3,
      formik,
      name: 'remaining',
      label: 'تعداد',
      helperText: t('موجودی کالا'),
      type: 'number',
    },
    {
      sm: 4,
      category: true,
      formik,
      name: 'category_id',
    },
    {
      sm: 5,
      formik,
      name: 'tags',
      selectTag: true,
    },

    {
      submit: true,
      customLabel: 'ثبت',
    },
  ]
}

export default productFieldsData
