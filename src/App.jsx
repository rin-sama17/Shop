import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MainLayout from './layouts/MainLayout'
import {
  Home,
  Products,
  ShowProduct,
  Posts,
  ShowPost,
  Dashboard,
  AddProduct,
  AddPost,
  EditUser,
} from './pages'
import { Navbar } from './components/navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <MainLayout>
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

        <Route path="*" element={<div>page not found</div>} />
      </Routes>
      <Footer />
    </MainLayout>
  )
}

export default App
