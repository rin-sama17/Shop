import { useEffect } from 'react'
import { prefixer } from 'stylis'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { darkTheme } from './theme/theme'
import { Navbar } from '../components/navbar'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import Grid from '@mui/material/Unstable_Grid2'
import Footer from '../components/footer/Footer'
import { cartItemsSeted } from '../reducers/cartSlice'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const MainLayout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
    dispatch(cartItemsSeted(cartProducts))
  }, [])
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
            sx={{ bgcolor: 'background.main', minHeight: '70vh' }}
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
