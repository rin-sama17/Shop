import { useParams } from 'react-router-dom'

import { ProductContent } from '../components/product/showProduct'

import { getProductById } from '../reducers/productSlice'
import { useSelector } from 'react-redux'
const ShowProduct = () => {
  const { productId } = useParams()

  const product = useSelector((state) => getProductById(state, productId))

  return <ProductContent product={product} />
}

export default ShowProduct
