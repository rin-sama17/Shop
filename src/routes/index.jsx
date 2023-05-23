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
        path: '/post/index',
        element: <Posts />,
      },
      {
        path: '/post/read/:postId',
        element: <ShowPost />,
      },

      {
        path: '/product/index',
        element: <Products />,
      },
      {
        path: '/product/read/:productId',
        element: <ShowProduct />,
      },

      {
        path: '/product/add',
        element: <AddProduct />,
      },

      {
        path: '/product/edit/:productId',
        element: <EditProduct />,
      },
      {
        path: '/post/add',
        element: <AddPost />,
      },
      {
        path: '/post/edit/:postId',
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
        path: '/contract/index',
        element: <Contracts />,
      },
      {
        path: '/contract/read/:contractId',
        element: <ShowContract />,
      },
    ],
  },
])
