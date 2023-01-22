// import { productsData } from '../../constants/products'
import Grid from '@mui/material/Unstable_Grid2'
import { Product } from '../Products'
import { useEffect, useState, useContext } from 'react'
import MainContext from '../../context'

const HomeNewProducts = () => {
  const { products, loading } = useContext(MainContext)
  // const [newProducts, setNewProducts] = useState([])

  // useEffect(() => {
  //   const filtredProducts = products.sort(
  //     (objA, objB) => Number(objA.date) - Number(objB.date),
  //   )
  //   setNewProducts(filtredProducts)
  //   console.log(filtredProducts)
  // }, [])

  return (
    <Grid container>
      {products.slice(0, 12).map((product, index) => (
        <Product
          product={product}
          key={index}
          loading={loading}
          sm={6}
          md={3}
          maxWidth={210}
        />
      ))}
    </Grid>
  )
}
export default HomeNewProducts
