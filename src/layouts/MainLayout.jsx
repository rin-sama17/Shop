import { useEffect } from 'react'
import { prefixer } from 'stylis'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { Outlet } from 'react-router-dom'
import { theme } from './theme/theme'
import { Navbar } from '../components/navbar'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { Container, Box } from '@mui/material'
import Footer from '../components/footer/Footer'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const MainLayout = () => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>فروشگاه فرش</title>
          </Helmet>{' '}
          <Box sx={{ bgcolor: 'bgcolor.main' }}>
            <Navbar />
            <Container maxWidth="lg" sx={{ p: { xs: 0 }, minHeight: '40vh' }}>
              <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
              />
              <Outlet />
            </Container>
            <Footer />
          </Box>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
