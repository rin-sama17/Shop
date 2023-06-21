import { createSelector } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useGetProductsQuery } from '../../../api'

import { CustomDivider } from '../../common'
import ProductSlider from '../productSlider/ProductsSlider'

const SimilarProducts = ({ product }) => {
  const selectSimilarProducts = useMemo(() => {
    const emptyArray = []

    return createSelector(
      (res) => res.data?.data[0],
      (res, product) => product,
      (data, product) =>
        data?.filter(
          (item) =>
            item.category_id === product.category_id && item.id !== product.id,
        ) ?? emptyArray,
    )
  }, [])

  const { similarProducts, isSuccess } = useGetProductsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      similarProducts: selectSimilarProducts(result, product),
    }),
  })
  console.log(similarProducts)
  if (!isSuccess || similarProducts.length === 0) {
    return
  }
  return (
    <>
      <CustomDivider label="محصولات مشابه" />
      <ProductSlider products={similarProducts} />
    </>
  )
}

export default SimilarProducts
