import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import App from '../App'
import {
  Posts,
  Products,
  ShowPost,
  ShowProduct,
  AdminPanel,
  SearchResult,
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
        path: '/admin-panel',
        element: <AdminPanel />,
      },
      {
        path: '/search/:query',
        element: <SearchResult />,
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
