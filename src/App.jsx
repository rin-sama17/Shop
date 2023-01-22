import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { ToastContainer } from 'react-toastify'
import { getAllProducts, getAllPosts } from '../services/shopService'
import MainContext from './context'
import MainLayout from './layouts/MainLayout'
import {
  Home,
  Products,
  ShowProduct,
  Posts,
  ShowPost,
  Dashboard,
  SingIn,
  AddProduct,
  AddPost,
  EditUser,
} from './pages'
import { Navbar } from './components/navbar'
import Footer from './components/footer/Footer'

import { useCookies } from 'react-cookie'
function App() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [productComments, setProductComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [mode, setMode] = useState(0)
  const [secondaryColor, setSecondaryColor] = useState('#ce93d8')
  const [user, setUser] = useState(null)
  const [singInModal, setSingInModal] = useState(false)

  const [cookies, setCookie] = useCookies(['user'])

  const handleColorChange = () => {
    setCookie('Secondary', secondaryColor, { path: '/' })
  }
  useEffect(() => {
    handleColorChange()
  }, [secondaryColor])

  useEffect(() => {
    console.log(cookies.Secondary)
    setSecondaryColor(cookies.Secondary)

    const fetchData = async () => {
      try {
        setLoading(true)

        const { data: productsData } = await getAllProducts()
        const { data: postsData } = await getAllPosts()
        console.log(productsData)
        console.log(postsData)

        setProducts(productsData.products)
        setPosts(postsData.posts)

        setLoading(false)
      } catch (error) {
        console.log(error)

        setLoading(false)
      }
    }
    fetchData()
  }, [])
  function ToRial(str) {
    JSON.stringify(str)
    str = str.replace(/\,/g, '')
    var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})')

    while (objRegex.test(str)) {
      str = str.replace(objRegex, '$1,$2')
    }

    return str
  }
  return (
    <MainContext.Provider
      value={{
        products,
        product,
        setProduct,
        setLoading,
        loading,
        post,
        posts,
        setPost,
        ToRial,
        productComments,
        setProductComments,
        secondaryColor,
        setSecondaryColor,
        setMode,
        cookies,
        handleColorChange,
        user,
        setUser,
        singInModal,
        setSingInModal,
      }}
    >
      <MainLayout mode={mode}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <SingIn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<ShowPost />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ShowProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/editUser" element={<EditUser />} />

          <Route path="*" element={<div>page not found</div>} />
        </Routes>
        <Footer />
      </MainLayout>
    </MainContext.Provider>
  )
}

export default App
