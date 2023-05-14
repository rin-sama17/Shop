import {
  Home,
  Store,
  SupportAgentOutlined,
  InfoOutlined,
  Apartment,
} from '@mui/icons-material'

export const tabsData = [
  { text: 'خانه', to: '/', icon: <Home /> },
  { text: 'فروشگاه', to: '/products', icon: <Store /> },
  { text: 'تماس با ما', to: '/chat', icon: <SupportAgentOutlined /> },
  { text: 'نمایندگی های ما', to: '/contracts', icon: <Apartment /> },
  { text: 'درباره ما', to: '/about-us', icon: <InfoOutlined /> },
]
