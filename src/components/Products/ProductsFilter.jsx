import { useMemo, useState } from 'react'
import { Typography, Box, Slider, Button } from '@mui/material'

import { toRial } from '../../helpers'
import { Stack } from '@mui/system'
import { SelectCategory } from '../common'

const ProductsFilter = ({ data, setData, isLoading }) => {
  const expensiveProduct = useMemo(() => {
    const sortedData = data?.sort((a, b) => b.price.localCompare(a.price))
    const costlyProduct = sortedData[sortedData.length - 1].price ?? null
    return costlyProduct
  }, [data])

  const [value, setValue] = useState([0, expensiveProduct])
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
        data?.filter((product) => {
          value[0] <= product.price && product.price <= value[1]
        }) ?? emptyArray
    }

    setData(filteredProducts)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (isLoading) {
    return
  }

  return (
    <Box
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        mt: 3,
      }}
    >
      <Box sx={{ px: 1, mb: 2 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          max={expensiveProduct}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
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
      <Typography variant="caption" color="secondary" sx={{ mb: 2 }}>
        از {toRial(value[0])} تا {toRial(value[1])} تومان
      </Typography>
      <Stack sx={{ mt: 3 }}>
        <SelectCategory value={category} setValue={setCategory} />
        <Button onClick={handleFilter} sx={{ mt: 1 }}>
          اعمال تغییرات
        </Button>
      </Stack>
    </Box>
  )
}
export default ProductsFilter
