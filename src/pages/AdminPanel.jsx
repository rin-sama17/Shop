import Grid from '@mui/material/Unstable_Grid2'

import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { useTheme } from '@mui/styles'
import AdminPanelTabs from '../components/adminPanel/AdminPanelTabs'
import Page from './Page'
import SliderManagement from '../components/adminPanel/pages/SliderManagement'
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
        <SwipeableViews
          enableMouseEvents
          index={pageNumber}
          onChangeIndex={handleSwipeNumber}
        >
          <Page pageNumber={pageNumber} index={0}>
            <SliderManagement />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            2222
          </Page>{' '}
          <Page pageNumber={pageNumber} index={2}>
            3333
          </Page>{' '}
          <Page pageNumber={pageNumber} index={3}>
            4444
          </Page>
        </SwipeableViews>
      </Grid>
    </Grid>
  )
}

export default AdminPanel
