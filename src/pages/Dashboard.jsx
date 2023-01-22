import Grid from '@mui/material/Unstable_Grid2'
import {
  Avatar,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  Box,
} from '@mui/material'
import { useState } from 'react'
//عکس موقت
import { slider01 } from '../assets'
import SwipeableViews from 'react-swipeable-views'
import {
  DashboardHomeContainer,
  MarkedProducts,
  DashboardHome,
} from '../components/dashboard'

import { Page } from './'
import { useTheme } from '@mui/styles'

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(0)

  const theme = useTheme()
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))
  const handlePageNumber = (event, value) => {
    setPageNumber(value)
  }
  const handleSwipeNumber = (value) => {
    setPageNumber(value)
  }
  const data = ['خانه', 'علامت شده', 'محصولات من', 'فاکتور ها', 'کامنت ها']
  const user = {
    fullName: 'رین',
    phone: '09031234321',
    password: 'ehduhewhdwi',
    address: 'سعادت اباد خیابان نادری کوچه 5 پلاک 3',
    image: slider01,
    posts: [],
    products: [],
    markedProduct: [],
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
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={slider01}
              alt=" "
              sx={{
                mx: 2,
                width: 50,
                height: 50,
              }}
            />{' '}
            <Typography color="text.primary" variant="body1" sx={{ my: 1 }}>
              user name
            </Typography>
          </Box>
        </Box>
        <Tabs
          orientation={isMdDown ? 'horizontal' : 'vertical'}
          allowScrollButtonsMobile
          selectionFollowsFocus
          value={pageNumber}
          onChange={handlePageNumber}
          sx={{
            '& .MuiTabs-indicator': {
              bgcolor: 'secondary.main',
              height: 3,
              width: '3px',
            },
            '& .MuiTab-root.Mui-selected': {
              color: 'secondary.main',
            },
          }}
        >
          {data.map((tab, index) => (
            <Tab
              label={tab}
              key={index}
              sx={{
                my: 0.5,
                '&.MuiTab-root': {
                  minHeight: 50,
                },
              }}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid xs={12} md={9.5} lg={10}>
        <SwipeableViews
          disableLazyLoading
          enableMouseEvents
          index={pageNumber}
          onChangeIndex={handleSwipeNumber}
        >
          <Page pageNumber={pageNumber} index={0}>
            <DashboardHomeContainer user={user} />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <MarkedProducts />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Typography variant="h6" color="text.primary">
              محصولات من
            </Typography>
          </Page>{' '}
          <Page pageNumber={pageNumber} index={3}>
            <Typography variant="h6" color="text.primary">
              فاکتور ها
            </Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography variant="h6" color="text.primary">
              کامنت ها
            </Typography>
          </Page>
        </SwipeableViews>
      </Grid>
    </Grid>
  )
}
export default Dashboard
