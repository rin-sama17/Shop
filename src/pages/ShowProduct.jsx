import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import MainContext from '../context'
import { Container } from '@mui/material'
import { ProductContent } from '../components/product/showProduct'
import { getProduct, getProductComments } from '../../services/shopService'

const ShowProduct = () => {
  const { productId } = useParams()
  const { setProduct, setProductComments, setLoading } = useContext(MainContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const { data: productData } = await getProduct(productId)
        const { data: productCommentsData } = await getProductComments(
          productId,
        )
        setProduct(productData)
        setProductComments(productCommentsData.comments)
        console.log(productCommentsData)

        setLoading(false)
      } catch (error) {
        console.log(error)

        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <Container maxWidth="lg">
      <ProductContent />
    </Container>
  )
}

export default ShowProduct
