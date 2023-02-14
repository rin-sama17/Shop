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
  EditUser,
  TrackOrders,
  Cart,
  Checkout,
} from '../pages'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <h3 className="text-center">چیزی پیدا نکردیم متاسفانه 🤗 ...</h3>
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
        path: '/addPost',
        element: <AddPost />,
      },
      {
        path: '/editUser',
        element: <EditUser />,
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
    ],
  },
])
