import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

import { useGetProductsQuery } from '../../api'
import { ProductLoading } from '../loading'
import { ProductsSlider } from '../products'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)
  const { data: products = { data: [] }, isSuccess } = useGetProductsQuery()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log(products)
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="جدیدترین ها" {...a11yProps(0)} />
          <Tab label="پرفروش ترین ها" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductsSlider products={products.data} />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductsSlider products={products.data} />
        )}
      </TabPanel>
    </Box>
  )
}
