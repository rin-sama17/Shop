'use client'

import { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'

import { ProductLoading } from '../loading'
import { ProductSlider } from '../products'
import { Page } from '../common'
import { getProducts } from '@/api'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const HomeNewProducts = async () => {
  const [value, setValue] = useState(0)
  const { data: products } = await getProducts()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="تخفیفات شگفت انگیز" {...a11yProps(0)} />
          <Tab label="جدیدترین ها" {...a11yProps(1)} />
          <Tab label="پرفروش ترین ها" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Page name="tabpanel" pageNumber={value} index={0}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductSlider products={products} />
        )}
      </Page>
      <Page name="tabpanel" pageNumber={value} index={1}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductSlider products={products} />
        )}
      </Page>
      <Page name="tabpanel" pageNumber={value} index={2}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductSlider products={products} />
        )}
      </Page>
    </Box>
  )
}
export default HomeNewProducts
