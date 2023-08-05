import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const tabPanel = (index) => {
  return {
    id: `categories-tab-${index}`,
    'aria-labelledby': `sidebar-tab-${index}`,
  }
}

const CategoryTabs = ({ pageNumber, setPageNumber, tabs }) => {
  const handlePageNumber = (event, value) => {
    setPageNumber(value)
  }

  return (
    <Tabs
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'tomato',
          height: 3,
          width: '3px',
        },
        '& .MuiTab-root': {
          color: 'black',
        },
        '& .MuiTab-root.Mui-selected': {
          color: 'tomato',
        },
      }}
      orientation="vertical"
      value={pageNumber}
      onChange={handlePageNumber}
      allowScrollButtonsMobile
      variant="scrollable"
    >
      {tabs.map((parent, index) => (
        <Tab
          key={index}
          label={parent.name}
          onMouseEnter={() => setPageNumber(index)}
          sx={{
            my: 0.5,
            color: 'black',
            '&.MuiTab-root': {
              minHeight: 50,
            },
          }}
          {...tabPanel(index)}
        />
      ))}
    </Tabs>
  )
}

export default CategoryTabs
