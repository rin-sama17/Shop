import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import { tabsData } from '../../constants/adminPanelTabs'

const AdminPanelTabs = ({ pageNumber, setPageNumber }) => {
  const theme = useTheme()

  const isMdDown = useMediaQuery(theme.breakpoints.down('md'))

  const handlePageNumber = (event, value) => {
    setPageNumber(value)
  }
  const tabs = tabsData()
  return (
    <Tabs
      sx={{
        position: 'sticky',
        top: '-30px',
        '& .MuiTabs-indicator': {
          backgroundColor: 'btnSidebar.light',
          height: 3,
          width: '3px',
        },
        '& .MuiTab-root': {
          color: 'btnSidebar.main',
        },
        '& .MuiTab-root.Mui-selected': {
          color: 'btnSidebar.light',
        },
      }}
      orientation={isMdDown ? 'horizontal' : 'vertical'}
      value={pageNumber}
      onChange={handlePageNumber}
      allowScrollButtonsMobile
      variant="scrollable"
      scrollButtons
      aria-label="tabs example"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.title}
          sx={{
            my: 0.5,
            '&.MuiTab-root': {
              minHeight: 50,
            },
          }}
          {...tab}
        />
      ))}
    </Tabs>
  )
}

export default AdminPanelTabs
