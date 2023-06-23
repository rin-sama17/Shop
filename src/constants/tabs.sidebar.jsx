import {
  Home,
  Store,
  SupportAgentOutlined,
  InfoOutlined,
  Apartment,
  Book,
} from '@mui/icons-material'

export const tabsData = [
  { text: 'خانه', to: '/', icon: <Home /> },
  { text: 'فروشگاه', to: '/products', icon: <Store /> },
  { text: 'وبلاگ', to: '/posts', icon: <Book /> },
  { text: 'نمایندگی ها', to: '/contracts', icon: <Apartment /> },
  { text: 'تماس با ما', to: '/contact-us', icon: <SupportAgentOutlined /> },
  { text: 'درباره ما', to: '/about-us', icon: <InfoOutlined /> },
]
