import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import MainContext from '../context'
import { Container } from '@mui/material'
import { ProductContent } from '../components/product/showProduct'
import { getProduct, getProductComments } from '../../services/shopService'

import { getProductById } from '../reducers/productSlice'
import { useSelector } from 'react-redux'
const ShowProduct = () => {
  const { productId } = useParams()

  const product = useSelector(() => getProductById(productId))
  // const { setProduct, setProductComments, setLoading } = useContext(MainContext)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true)

  //       const { data: productData } = await getProduct(productId)
  //       const { data: productCommentsData } = await getProductComments(
  //         productId,
  //       )
  //       setProduct(productData)
  //       setProductComments(productCommentsData.comments)
  //       console.log(productCommentsData)

  //       setLoading(false)
  //     } catch (error) {
  //       console.log(error)

  //       setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <Container maxWidth="lg">
      <ProductContent product={product} />
    </Container>
  )
}

export default ShowProduct