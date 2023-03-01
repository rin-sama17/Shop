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
  EditPost,
  TrackOrders,
  Cart,
  Checkout,
  AdminPanel,
  EditProduct,
  SearchResult,
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
      {
        path: '/admin-panel',
        element: <AdminPanel />,
      },
      {
        path: '/search/:query',
        element: <SearchResult />,
      },
    ],
  },
])
