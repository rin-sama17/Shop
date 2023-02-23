import { Tab, Tabs, tabsClasses, useMediaQuery, useTheme } from '@mui/material'
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
      orientation={isMdDown ? 'horizontal' : 'vertical'}
      value={pageNumber}
      onChange={handlePageNumber}
      textColor="secondary"
      indicatorColor="secondary"
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
