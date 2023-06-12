import { Divider } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Page } from '../../pages'
import { selectAllCategories } from '../../reducers/categorySlice'

import CategoriesContent from './CategoriesContent'
import CategoryTabs from './CategotiesTab'

const CategoriesPopover = () => {
  const categories = useSelector(selectAllCategories)
  const [pageNumber, setPageNumber] = useState(0)
  const tabs = categories.filter((c) => c.category_id === null)

  return (
    <Grid
      container
      sx={{
        width: 1,
        flexWrap: 'nowrap',
        minHeight: '70vh',
      }}
    >
      <Grid
        md={2}
        sx={{
          width: 1,
        }}
      >
        <CategoryTabs
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          tabs={tabs}
        />
      </Grid>
      <Divider orientation="vertical" />
      <Grid md={10}>
        {tabs.map((parent, index) => (
          <Page
            key={index}
            pageNumber={pageNumber}
            name="categories-tab"
            index={index}
          >
            <CategoriesContent parent={parent} />
          </Page>
        ))}
      </Grid>
    </Grid>
  )
}

export default CategoriesPopover
