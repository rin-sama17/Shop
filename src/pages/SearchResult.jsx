import { createSelector } from '@mui/x-data-grid/internals'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPostsQuery, useGetProductsQuery } from '../api'
import Grid from '@mui/material/Unstable_Grid2'
import { CustomDivider, CustomMassage, SearchField } from '../components/common'
import { Product } from '../components/products'
import { Post } from '../components/Posts'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'

const SearchResult = () => {
  const { query } = useParams()

  const categoryQuery = query.slice().split(';name:')
  const selectProducts = useMemo(() => {
    return createSelector(
      (res) => res.data,
      (res, query) => query,
      (data, query) =>
        data?.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category === categoryQuery[0] ||
            product.tags.toLowerCase().includes(query.toLowerCase()),
        ),
    )
  }, [query])

  const selectPosts = useMemo(() => {
    return createSelector(
      (res) => res.data,
      (res, query) => query,
      (data, query) =>
        data?.filter(
          (post) =>
            post.heading.toLowerCase().includes(query.toLowerCase()) ||
            post.category === categoryQuery[0] ||
            post.tags.toLowerCase().includes(query.toLowerCase()),
        ),
    )
  }, [query])
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
      <Typography
        variant="h5"
        color="secondary"
        sx={{ my: 3, display: 'flex', justifyContent: 'center', width: 1 }}
      >
        نتایج جستجو برای "{categoryQuery[1] ? categoryQuery[1] : query}"
      </Typography>
      <CustomDivider label="محصولات" />

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <Product productId={product.id} maxWidth={240} key={index} />
        ))
      ) : (
        <CustomMassage
          text="محصولی پیدا نشد"
          btnLabel="رفتن به فروشگاه"
          to="/products"
        />
      )}
      <CustomDivider label="پست ها" />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <Post postId={post.id} key={index} />
        ))
      ) : (
        <CustomMassage
          text="پستی پیدا نشد"
          btnLabel="رفتن به وبلاگ"
          to="/posts"
        />
      )}
    </Grid>
  )
}

export default SearchResult
