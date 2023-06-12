import { useMemo } from 'react'
import {
  Box,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../../reducers/categorySlice'
import { KeyboardArrowLeft } from '@mui/icons-material'
const ParentCategory = ({ parent, children }) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6">{parent.name}</Typography>
        <KeyboardArrowLeft />
      </Box>

      {children}
    </>
  )
}

const ChildCategory = ({ child }) => {
  return (
    <Box>
      <Typography sx={{ ml: 2 }} color="text.secondary" variant="subtitle1">
        {child.name}
      </Typography>
    </Box>
  )
}

const FindParents = ({ parent, categories }) => {
  const children = useMemo(
    () => categories.filter((child) => child.category_id === parent.id),
    [categories, parent],
  )

  return (
    <>
      {children.length > 0 ? (
        <Box>
          <ParentCategory parent={parent}>
            {children.map((child, index) => (
              <ChildCategory child={child} key={index} />
            ))}
          </ParentCategory>
        </Box>
      ) : (
        <ChildCategory child={parent} />
      )}
    </>
  )
}

const CategoriesContent = ({ parent }) => {
  const categories = useSelector(selectAllCategories)
  console.log(categories)
  return (
    <Box sx={{ direction: 'ltr' }}>
      {categories?.map((child, index) => (
        <>
          {child.category_id === parent?.id && (
            <FindParents parent={child} categories={categories} key={index} />
          )}
        </>
      ))}
    </Box>
  )
}

export default CategoriesContent
