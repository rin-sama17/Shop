import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

import { useGetProductsQuery } from '../../api'
import { ProductLoading } from '../loading'
import { ProductsSlider } from '../products'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchFilterProduct,
  selectFiltredProducts,
} from '../../reducers/filterProductsSlice'

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
  const { newProducts, discountedProducts, isSuccess } = useSelector(
    selectFiltredProducts,
  )
  const dispatch = useDispatch()
  const { t } = useTranslation()

  React.useEffect(() => {
    dispatch(fetchFilterProduct())
  }, [])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
          <Tab label={t('جدیدترین ها')} {...a11yProps(0)} />
          <Tab label={t('تخفیف های ویژه')} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductsSlider products={newProducts} />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {!isSuccess ? (
          <Box sx={{ width: 0, m: 2 }}>
            <ProductLoading />
          </Box>
        ) : (
          <ProductsSlider products={discountedProducts} />
        )}
      </TabPanel>
    </Box>
  )
}
