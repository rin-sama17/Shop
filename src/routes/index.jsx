import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import App from '../App'
import {
  Posts,
  Products,
  ShowPost,
  ShowProduct,
  AddPost,
  AddProduct,
  EditPost,
  TrackOrders,
  Cart,
  Checkout,
  AdminPanel,
  EditProduct,
  SearchResult,
  Paid,
  AboutUs,
} from '../pages'
import { CustomMassage } from '../components/common'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <CustomMassage
        text="صفحه مورد نظر یافت نشد"
        btnLabel="برگشت به خانه"
        to="/"
      />
    ),
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:postId',
        element: <ShowPost />,
      },

      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:productId',
        element: <ShowProduct />,
      },

      {
        path: '/addProduct',
        element: <AddProduct />,
      },

      {
        path: '/editProduct/:productId',
        element: <EditProduct />,
      },
      {
        path: '/addPost',
        element: <AddPost />,
      },
      {
        path: '/editPost/:postId',
        element: <EditPost />,
      },

      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/track-orders',
        element: <TrackOrders />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/checkout/:cartId',
        element: <Paid />,
      },
      {
        path: '/admin-panel',
        element: <AdminPanel />,
      },
      {
        path: '/search/:query',
        element: <SearchResult />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
])
