import { useParams } from 'react-router-dom'
import { ProductContent } from '../components/products'
import { useGetProductQuery } from '../api'
import { ShowProductLoading } from '../components/loading'
import { SimilarProducts } from '../components/products/showProduct'

const ShowProduct = () => {
  const { productId } = useParams()
  const { data = { product: {} }, isSuccess } = useGetProductQuery(productId)
  if (!isSuccess) {
    return <ShowProductLoading />
  }
  return (
    <>
      <ProductContent product={data.product} />
      <SimilarProducts product={data.product} />
    </>
  )
}

export default ShowProduct
