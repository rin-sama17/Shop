import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import App from '../App'
import {
  Posts,
  Products,
  ShowPost,
  ShowProduct,
  RouteProtection,
  SearchResult,
  Agencies,
  ShowAgency,
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
        path: '/products/:productId',
        element: <ShowProduct />,
      },
      {
        path: '/admin-panel',
        element: <RouteProtection />,
      },
      {
        path: '/search/:query',
        element: <SearchResult />,
      },

      {
        path: '/agencies',
        element: <Agencies />,
      },
      {
        path: '/agencies/:agencyId',
        element: <ShowAgency />,
      },
    ],
  },
])
