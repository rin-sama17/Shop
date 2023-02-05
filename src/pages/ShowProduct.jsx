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

  const product = useSelector((state) => getProductById(state, productId))

  return (
    // <Container maxWidth="lg">
    <ProductContent product={product} />
    // </Container>
  )
}

export default ShowProduct
