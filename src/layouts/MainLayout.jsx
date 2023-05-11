import { useEffect } from 'react'
import { prefixer } from 'stylis'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { theme } from './theme/theme'
import { Navbar } from '../components/navbar'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { Container, Box } from '@mui/material'
import Footer from '../components/footer/Footer'
import { cartItemsSeted } from '../reducers/cartSlice'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { getThemeMode } from '../reducers/themeSlice'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const MainLayout = () => {
  const currentThemeMode = useSelector(getThemeMode)
  const dispatch = useDispatch()

  useEffect(() => {
    const localCartProducts = localStorage.getItem('cartProducts')
    if (!localCartProducts) {
      localStorage.setItem('cartProducts', JSON.stringify([]))
    } else {
      const cartProducts = JSON.parse(localCartProducts)
      dispatch(cartItemsSeted(cartProducts))
    }
  }, [])

  const { darkTheme, lightTheme } = theme()
  const themeMode = currentThemeMode === 'dark' ? lightTheme : lightTheme
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={themeMode}>
        <HelmetProvider>
          <Helmet>
            <title>فروشگاه فرش</title>
          </Helmet>{' '}
          <Box sx={{ bgcolor: 'background.main' }}>
            <Navbar />

            <Container maxWidth="lg">
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
