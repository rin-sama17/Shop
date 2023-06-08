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
  { text: 'فروشگاه', to: '/product/index', icon: <Store /> },
  { text: 'وبلاگ', to: '/post/index', icon: <Book /> },
  { text: 'نمایندگی های ما', to: '/contract/index', icon: <Apartment /> },
  { text: 'تماس با ما', to: '/chat', icon: <SupportAgentOutlined /> },
  { text: 'درباره ما', to: '/about-us', icon: <InfoOutlined /> },
]
