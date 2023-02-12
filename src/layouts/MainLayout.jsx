import { HelmetProvider, Helmet } from 'react-helmet-async'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import Grid from '@mui/material/Unstable_Grid2'

import { darkTheme } from './theme/theme'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={darkTheme}>
        <HelmetProvider>
          <Helmet>
            <title>فروشگاه من</title>
          </Helmet>
          <Grid container sx={{ bgcolor: 'background.main' }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
