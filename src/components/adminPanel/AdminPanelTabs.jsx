import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { tabsData } from '../../constants/adminPanelTabs'

const AdminPanelTabs = ({ pageNumber, setPageNumber }) => {
  const theme = useTheme()
  const isMdDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation()

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
          label={t(tab.title)}
          sx={{
            my: 0.5,
            textTransform: 'none',

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
