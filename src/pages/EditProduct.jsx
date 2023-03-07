import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../api'
import { EditProductFields } from '../components/products'
import { Spinner } from '../components/common'

const EditProduct = () => {
  const { productId } = useParams()
  const { data: product, isLoading, isSuccess } = useGetProductQuery(productId)

  let content
  if (isLoading) {
    content = <Spinner />
  } else if (isSuccess) {
    content = <EditProductFields product={product} />
  }

  return <Container maxWidth="lg">{content}</Container>
}

export default EditProduct
