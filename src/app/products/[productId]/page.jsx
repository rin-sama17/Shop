import { ProductContent } from '@/components/products'
import { getProduct } from '@/api'

const ShowProduct = async ({ params: { productId } }) => {
  const { product } = await getProduct(productId)
  return <ProductContent product={product} />
}

export default ShowProduct
