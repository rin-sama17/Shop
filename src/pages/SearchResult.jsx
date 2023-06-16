import { createSelector } from '@mui/x-data-grid/internals'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../api'
import Grid from '@mui/material/Unstable_Grid2'
import { CustomDivider, CustomMassage, SearchField } from '../components/common'
import { Product } from '../components/products'
import { Post } from '../components/Posts'
import { Stack } from '@mui/system'
import { Typography, Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchSearchResult, selectSearchResults } from '../reducers/searchSlice'
import { CustomNoRowsOverlay } from '../components/adminPanel/components'
import { useSelector } from 'react-redux'
import { Book, Store } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
const SearchResult = () => {
  const { query } = useParams()
  const [base, setBase] = useState('product')
  const { t } = useTranslation()

  const searchResult = useSelector(selectSearchResults)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSearchResult({ query, base }))
  }, [base, query])

  const handleChangeBase = () => {
    setBase((prev) => (prev === 'product' ? 'post' : 'product'))
  }

  let baseBtnContent
  if (base === 'post') {
    baseBtnContent = (
      <>
        <Store />
        <Typography variant="subtitle2" sx={{ ml: 1 }}>
          {t('جستجو در محصولات')}
        </Typography>
      </>
    )
  } else {
    baseBtnContent = (
      <>
        <Book />
        <Typography variant="subtitle2" sx={{ ml: 1 }}>
          {t('جستجو در پست ها')}
        </Typography>
      </>
    )
  }
  return (
    <Box sx={{ width: 1, mt: 3, minHeight: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 1,
          my: 3,
        }}
      >
        <Typography variant="h5" color="secondary">
          {t('نتایج جستجو برای')} "{query}"
        </Typography>
        <Button
          onClick={handleChangeBase}
          color={base === 'post' ? 'info' : 'warning'}
          variant="contained"
          sx={{ width: 190, my: 3 }}
        >
          {baseBtnContent}
        </Button>
      </Box>
      {searchResult.length > 0 ? (
        <Grid container sx={{ width: 1 }}>
          {searchResult.map((item, index) => (
            <>
              {base === 'product' ? (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ justifyContent: 'center' }}
                >
                  <Product productId={item.id} key={index} />
                </Grid>
              ) : (
                <Post postId={item.id} key={index} />
              )}
            </>
          ))}
        </Grid>
      ) : (
        <CustomNoRowsOverlay />
      )}
    </Box>
  )
}

export default SearchResult
