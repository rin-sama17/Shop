import Grid from '@mui/material/Unstable_Grid2'

import { useState } from 'react'

import AdminPanelTabs from '../components/adminPanel/AdminPanelTabs'
import { Page } from '.'
import {
  Dashboard,
  SliderManagement,
  ProductManagement,
  PostManagement,
  CategoryManagement,
  RoleManagement,
  AgencyManagement,
  PremissionManagement,
  UserManagement,
  TagManagement,
} from '../components/adminPanel/pages'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectAuth } from '../reducers/authSlice'

const pages = [
  <Dashboard />,
  <SliderManagement />,
  <ProductManagement />,
  <PostManagement />,
  <CategoryManagement />,
  <TagManagement />,
  <AgencyManagement />,
  <PremissionManagement />,
  <RoleManagement />,
  <UserManagement />,
]

const AdminPanel = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const navigate = useNavigate()
  const { token } = useSelector(selectAuth)
  const { t } = useTranslation()
  useEffect(() => {
    if (!token) {
      navigate('/')
      toast.error(t('شما به این صفحه دسترسی ندارید'), {
        position: 'bottom-left',
      })
    }
  }, [])

  return (
    <Grid
      container
      sx={{
        width: 1,
        position: 'relative',
        minHeight: { xs: 0, md: '100vh' },
      }}
    >
      <Grid
        xs={12}
        md={2.5}
        lg={2}
        sx={{
          width: 1,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          bgcolor: 'bgSidebar.dark',
          position: 'inherit',
          height: { xs: 'fit-content', md: '100vh' },
          top: { xs: 0, md: '-37px' },
        }}
      >
        <AdminPanelTabs pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </Grid>
      <Grid xs={12} md={9.5} lg={10}>
        {pages.map((page, index) => (
          <Page
            key={index}
            pageNumber={pageNumber}
            name="adminPanel"
            index={index}
          >
            {page}
          </Page>
        ))}
      </Grid>
    </Grid>
  )
}

export default AdminPanel
