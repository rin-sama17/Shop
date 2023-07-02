import { useEffect } from 'react'
import { prefixer } from 'stylis'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { Outlet } from 'react-router-dom'
import { useTheme } from './theme/theme'
import { Navbar } from '../components/navbar'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { ToastContainer } from 'react-toastify'
import { Container, Box } from '@mui/material'
import Footer from '../components/footer/Footer'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { bg } from '../assets'
import { useSelector } from 'react-redux'
import { selectLang } from '../reducers/langSlice'
import { useTranslation } from 'react-i18next'
import '../i18n'
import { useLocation } from 'react-router-dom'
const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const emptyCache = createCache({
  key: 'meaningless-key',
})

const MainLayout = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  const { t, i18n } = useTranslation()
  const lang = useSelector(selectLang)
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])
  const theme = useTheme()
  return (
    <CacheProvider value={lang === 'en' ? emptyCache : cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>فروشگاه فرش</title>
          </Helmet>{' '}
          <Box sx={{ direction: lang === 'en' && 'ltr' }}>
            <Navbar />
            <Container
              maxWidth="lg"
              sx={{
                px: { xs: 0 },
                mb: 2,
                minHeight: '40vh',
                maxWidth: pathname == '/products' ? '100% !important' : 'auto',
              }}
            >
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
