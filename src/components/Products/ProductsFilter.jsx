import { useMemo, useState, useEffect } from 'react'
import { Typography, Box, Slider, Button } from '@mui/material'

import { toRial } from '../../helpers'
import { Stack } from '@mui/system'
import { SelectCategory, Spinner } from '../common'

import Grid from '@mui/material/Unstable_Grid2'
const ProductsFilter = ({ data, setData, isLoading }) => {
  const expensiveProduct = useMemo(() => {
    const sortedData = data?.slice().sort((a, b) => a.price - b.price)
    const costlyProduct = sortedData[sortedData.length - 1].price ?? null
    return costlyProduct
  }, [data])

  const [value, setValue] = useState([1, expensiveProduct])
  const [category, setCategory] = useState('')

  const handleFilter = () => {
    const emptyArray = []
    let filteredProducts = []

    if (category !== '') {
      filteredProducts =
        data?.filter((product) => {
          if (product.category === category) {
            return value[0] <= product.price && product.price <= value[1]
          }
        }) ?? emptyArray
    } else {
      filteredProducts =
        data?.filter(
          (product) => value[0] <= product.price && product.price <= value[1],
        ) ?? emptyArray
    }

    setData(filteredProducts)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClear = () => {
    setCategory('')
    setValue([1, expensiveProduct])
  }

  useEffect(() => {
    handleFilter()
  }, [category, value])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Box>
      <Grid
        container
        sx={{
          width: 1,
          mb: 2,
          px: 5,
        }}
      >
        <Grid xs={12} md={5} sx={{ pr: 2 }}>
          <Stack>
            <SelectCategory value={category} setValue={setCategory} />
            <Button onClick={handleClear} color="error" sx={{ mt: 1 }}>
              حذف تغییرات
            </Button>
          </Stack>
        </Grid>
        <Grid xs={12} md={7} sx={{ px: 1 }}>
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
            <Typography variant="caption">ارزان ترین </Typography>
            <Typography variant="caption">گران ترین </Typography>
          </Box>

          <Typography variant="caption" color="secondary">
            از {toRial(value[0])} تا {toRial(value[1])} تومان
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ProductsFilter
