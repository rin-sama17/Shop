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
  Agencies,
  ShowAgency,
  ContactUs,
  AuthorPage,
  AboutUs,
} from '../pages'
import ErrorElement from './ErrorElement'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorElement />,
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
        element: <AdminPanel />,
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
      {
        path: '/author/:userId',
        element: <AuthorPage />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
])
