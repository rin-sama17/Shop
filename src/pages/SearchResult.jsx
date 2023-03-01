import { createSelector } from '@mui/x-data-grid/internals'
import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGetPostsQuery, useGetProductsQuery } from '../api'
import Grid from '@mui/material/Unstable_Grid2'
import { CustomDivider, SearchField } from '../components/common'
import { Product } from '../components/products'
import { Post } from '../components/Posts'
import { Stack, Box } from '@mui/system'
import { Button, Card, Typography } from '@mui/material'

const SearchResult = () => {
  const { query } = useParams()

  const selectProducts = useMemo(() => {
    const emptyArray = []

    return createSelector(
      (res) => res.data,
      (res, query) => query,
      (data, query) =>
        data?.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ??
            emptyArray,
        ),
    )
  }, [])

  const selectPosts = useMemo(() => {
    const emptyArray = []

    return createSelector(
      (res) => res.data,
      (res, query) => query,
      (data, query) =>
        data?.filter(
          (post) =>
            post.heading.toLowerCase().includes(query.toLowerCase()) ??
            emptyArray,
        ),
    )
  }, [])
  const { filteredProducts = [] } = useGetProductsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      filteredProducts: selectProducts(result, query),
    }),
  })

  const { filteredPosts = [] } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      filteredPosts: selectPosts(result, query),
    }),
  })

  return (
    <Grid container sx={{ width: 1, mt: 3 }}>
      <Stack sx={{ width: 1, flexWrap: 'wrap' }} alignItems="center">
        <SearchField />
      </Stack>
      <CustomDivider label="محصولات" />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <Product productId={product.id} />)
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ width: 1, mb: 5 }}
        >
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
              محصولی پیدا نشد
            </Typography>

            <Button fullWidth sx={{ mt: 2 }} component={Link} to="/products">
              رفتن به فروشگاه
            </Button>
          </Card>
        </Stack>
      )}
      <CustomDivider label="پست ها" />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <Post postId={post.id} />)
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ width: 1, mb: 5 }}
        >
          <Card sx={{ p: 3 }}>
            <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
              پستی پیدا نشد
            </Typography>

            <Button fullWidth sx={{ mt: 2 }} component={Link} to="/posts">
              رفتن به وبلاگ
            </Button>
          </Card>
        </Stack>
      )}
    </Grid>
  )
}

export default SearchResult
