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
  const [mode, setMode] = useState(0)
  const [secondaryColor, setSecondaryColor] = useState('#ce93d8')

  const [cookies, setCookie] = useCookies(['user'])

  const handleColorChange = () => {
    setCookie('Secondary', secondaryColor, { path: '/' })
  }
  useEffect(() => {
    handleColorChange()
  }, [secondaryColor])

  return (
    <MainContext.Provider
      value={{
        secondaryColor,
        setSecondaryColor,
        setMode,
        cookies,
        handleColorChange,
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

          {/* <Route path="*" element={<div>page not found</div>} /> */}
        </Routes>
        <Footer />
      </MainLayout>
    </MainContext.Provider>
  )
}

export default App
