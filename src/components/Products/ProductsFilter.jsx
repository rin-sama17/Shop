import { useMemo, useState, useEffect } from 'react'
import {
  Typography,
  Box,
  Slider,
  Button,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Stack,
} from '@mui/material'

import { toRial } from '../../helpers'
import { SelectCategory, Spinner } from '../common'

import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  selectFiltredProducts,
  filterProducts,
  resetProducts,
} from '../../reducers/filterProductsSlice'

const ProductsFilter = ({ isLoading }) => {
  const { t } = useTranslation()
  const { state } = useLocation()

  const { products } = useSelector(selectFiltredProducts)
  const expensiveProduct = useMemo(() => {
    const sortedData = products?.slice().sort((a, b) => a.price - b.price)
    const costlyProduct = sortedData[sortedData?.length - 1].price ?? null
    return Number(costlyProduct)
  }, [products])

  const [value, setValue] = useState([1, expensiveProduct])
  const [category, setCategory] = useState(null)
  const [sortBy, setSortBy] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    const urlCategory = state.category
    if (urlCategory) {
      dispatch(filterProducts({ urlCategory, value, sortBy }))
      setCategory(urlCategory)
    }
    console.log(state, urlCategory, category)
  }, [state.category])

  useEffect(() => {
    dispatch(filterProducts({ category, value, sortBy }))
  }, [category, value, sortBy])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClear = () => {
    setCategory('')
    setValue([1, expensiveProduct])
    setSortBy(0)
    dispatch(resetProducts())
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Grid
      container
      sx={{
        width: 1,
        m: 'auto',
      }}
      spacing={2}
    >
      <Grid xs={12}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleClear}
          color="error"
          sx={{ mb: 2 }}
        >
          {t('حذف تغییرات')}
        </Button>
        <SelectCategory value={category} setValue={setCategory} />
      </Grid>
      <Grid xs={12}>
        <FormControl fullWidth size="small">
          <InputLabel>{t('مرتب کردن براساس')}</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            input={<OutlinedInput label={t('مرتب کردن براساس')} />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 48 * 4.5 + 8,
                  width: 250,
                },
              },
            }}
          >
            {[
              'تمام محصولات',
              'جدیدترین ها',
              'تخفیف های ویژه',
              'ارزان ترین',
              'گران ترین',
            ].map((option, index) => (
              <MenuItem value={index} key={index}>
                {t(option)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12} sx={{ px: 1 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          max={expensiveProduct}
          min={1}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'text.primary',
          }}
        >
          <Typography variant="caption">{t('ارزان ترین')} </Typography>
          <Typography variant="caption">{t('گران ترین')} </Typography>
        </Box>

        <Typography variant="caption" color="secondary">
          {t('از')} {toRial(value[0])} {t('تا')} {toRial(value[1])} {t('تومان')}
        </Typography>
      </Grid>
    </Grid>
  )
}
export default ProductsFilter
