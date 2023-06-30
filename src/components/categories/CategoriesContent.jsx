import { Fragment, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../../reducers/categorySlice'
import { KeyboardArrowLeft } from '@mui/icons-material'
const ParentCategory = ({ parent, children }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '30%',
          mr: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'black',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            '&:hover': {
              color: 'tomato',
              cursor: 'pointer',
            },
          }}
        >
          {parent.name}
        </Typography>
        <KeyboardArrowLeft />
      </Box>

      {children}
    </>
  )
}

const ChildCategory = ({ child }) => {
  return (
    <Typography
      color="text.secondary"
      variant="subtitle1"
      sx={{
        mr: 2,
        width: '30%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
          color: 'tomato',
          cursor: 'pointer',
        },
      }}
    >
      {child.name}
    </Typography>
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
        <ParentCategory parent={parent}>
          {children.map((child, index) => (
            <ChildCategory child={child} key={index} />
          ))}
        </ParentCategory>
      ) : (
        <ChildCategory child={parent} />
      )}
    </>
  )
}

const CategoriesContent = ({ parent }) => {
  const categories = useSelector(selectAllCategories)
  return (
    <Box
      sx={{
        direction: 'ltr',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '47vh',
        alignContent: 'flex-start',
      }}
    >
      {categories?.map((child, index) => (
        <Fragment key={index}>
          {child.category_id === parent?.id && (
            <FindParents parent={child} categories={categories} key={index} />
          )}
        </Fragment>
      ))}
    </Box>
  )
}

export default CategoriesContent
