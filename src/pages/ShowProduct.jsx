import { useParams } from 'react-router-dom'
import { ProductContent } from '../components/products'
import { useGetProductQuery } from '../api'
import { ShowProductLoading } from '../components/loading'

const ShowProduct = () => {
  const { productId } = useParams()
  const { data: product, isLoading } = useGetProductQuery({ id: productId })
  if (isLoading) {
    return <ShowProductLoading />
  }
  return <ProductContent product={product} />
}

export default ShowProduct
