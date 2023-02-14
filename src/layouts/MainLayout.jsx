import { HelmetProvider, Helmet } from 'react-helmet-async'
import { CacheProvider } from '@emotion/react'
import { Box, ThemeProvider } from '@mui/material'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { Outlet } from 'react-router-dom'
import { darkTheme } from './theme/theme'
import { Navbar } from '../components/navbar'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import Grid from '@mui/material/Unstable_Grid2'
const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const MainLayout = () => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={darkTheme}>
        <HelmetProvider>
          <Helmet>
            <title>فروشگاه من</title>
          </Helmet>
          <Navbar />
          <Grid
            container
            sx={{ bgcolor: 'background.main', minHeight: '70vh', py: 2 }}
          >
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Outlet />
          </Grid>
          <Footer />
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
