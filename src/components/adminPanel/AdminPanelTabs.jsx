import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'

const AdminPanelTabs = ({ pageNumber, setPageNumber }) => {
  const theme = useTheme()

  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))
  const data = [
    'مدیریت اسلایدها',
    'مدیریت کاربران',
    'مدیریت سفارشات',
    'مدیریت نظرات',
  ]

  const handlePageNumber = (event, value) => {
    setPageNumber(value)
  }
  return (
    <Tabs
      orientation={isMdDown ? 'horizontal' : 'vertical'}
      allowScrollButtonsMobile
      selectionFollowsFocus
      value={pageNumber}
      onChange={handlePageNumber}
      textColor="secondary"
      indicatorColor="secondary"
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab}
          sx={{
            my: 0.5,
            '&.MuiTab-root': {
              minHeight: 50,
            },
          }}
        />
      ))}
    </Tabs>
  )
}

export default AdminPanelTabs
