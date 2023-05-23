import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { useGetProductsQuery } from '../../api'
import { ProductLoading } from '../loading'
import { ProductSlider } from '../products'
import Countdown from 'react-countdown'
import { Button } from '@mui/material'

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
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const { data: products = [], isLoading } = useGetProductsQuery()

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
        >
          <Tab label="تخفیفات شگفت انگیز" {...a11yProps(0)} />
          <Tab label="جدیدترین ها" {...a11yProps(1)} />
          <Tab label="پرفروش ترین ها" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {isLoading ? (
          <ProductLoading width={240} />
        ) : (
          <ProductSlider products={products} />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isLoading ? (
          <ProductLoading width={240} />
        ) : (
          <ProductSlider products={products} />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {isLoading ? (
          <ProductLoading width={240} />
        ) : (
          <ProductSlider products={products} />
        )}
      </TabPanel>
    </Box>
  )
}
