import Grid from '@mui/material/Unstable_Grid2'

import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import AdminPanelTabs from '../components/adminPanel/AdminPanelTabs'
import Page from './Page'
import SliderManagement from '../components/adminPanel/pages/SliderManagement'
import OrderManagement from '../components/adminPanel/pages/OrderManagement.jsx'
import ProductManagement from '../components/adminPanel/pages/ProductManagement.jsx'
import PostManagement from '../components/adminPanel/pages/PostManagement.jsx'
import DiscountManagement from '../components/adminPanel/pages/DiscountManagment.jsx'

const AdminPanel = () => {
  const [pageNumber, setPageNumber] = useState(0)

  const handleSwipeNumber = (e) => {
    setPageNumber(e)
  }

  return (
    <Grid container sx={{ width: 1 }}>
      <Grid
        xs={12}
        md={2.5}
        lg={2}
        sx={{
          width: 1,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <AdminPanelTabs pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </Grid>
      <Grid xs={12} md={9.5} lg={10}>
        <SwipeableViews index={pageNumber} onChangeIndex={handleSwipeNumber}>
          <Page pageNumber={pageNumber} index={0}>
            <SliderManagement />
          </Page>

          <Page pageNumber={pageNumber} index={1}>
            <OrderManagement />
          </Page>

          <Page pageNumber={pageNumber} index={2}>
            <ProductManagement />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <PostManagement />
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <DiscountManagement />
          </Page>
        </SwipeableViews>
      </Grid>
    </Grid>
  )
}

export default AdminPanel
