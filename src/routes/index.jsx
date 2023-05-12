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
  AdminPanel,
  EditProduct,
  SearchResult,
  AboutUs,
  Contracts,
  ShowContract,
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
      {
        path: '/contracts',
        element: <Contracts />,
      },
      {
        path: '/contracts/:contractId',
        element: <ShowContract />,
      },
    ],
  },
])
