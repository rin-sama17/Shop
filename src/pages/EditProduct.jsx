import { Box, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../api'
import EditProductFields from './EditProductFields'
const EditProduct = () => {
  const { productId } = useParams()
  const { data: product, isLoading, isSuccess } = useGetProductQuery(productId)

  let content
  if (isLoading) {
    content = <Typography>بارگذاری</Typography>
  } else if (isSuccess) {
    content = <EditProductFields product={product} />
  }

  return <Container maxWidth="lg">{content}</Container>
}

export default EditProduct
