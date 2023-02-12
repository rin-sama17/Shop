import { useParams } from 'react-router-dom'
import { ProductContent } from '../components/product/showProduct'
import { useGetProductQuery } from '../api'
import ShowProductLoading from '../components/loading/ShowProductLoading'

const ShowProduct = () => {
  const { productId } = useParams()
  const { data: product, isLoading } = useGetProductQuery(productId)
  if (isLoading) {
    return <ShowProductLoading />
  }
  return <ProductContent product={product} />
}

export default ShowProduct
