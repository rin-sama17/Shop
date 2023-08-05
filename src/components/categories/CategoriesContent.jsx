import { Fragment, useMemo } from 'react'

import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectAllCategories } from '../../reducers/categorySlice'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const ParentCategory = ({ parent, children, setOpen }) => {
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
        <Link
          to={`/products`}
          state={{ category: parent.id }}
          onClick={() => setOpen(false)}
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
        </Link>

        <KeyboardArrowLeft />
      </Box>

      {children}
    </>
  )
}

const ChildCategory = ({ child, setOpen }) => {
  return (
    <Link
      to={`/products`}
      state={{ category: child.id }}
      onClick={() => setOpen(false)}
    >
      <Typography
        color="text.secondary"
        variant="subtitle1"
        sx={{
          mr: 2,
          width: { md: '40%', lg: '30%' },
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
    </Link>
  )
}

const FindParents = ({ parent, categories, setOpen }) => {
  const children = useMemo(
    () => categories.filter((child) => child.category_id === parent.id),
    [categories, parent],
  )

  return (
    <>
      {children.length > 0 ? (
        <ParentCategory parent={parent} setOpen={setOpen}>
          {children.map((child, index) => (
            <ChildCategory child={child} key={index} setOpen={setOpen} />
          ))}
        </ParentCategory>
      ) : (
        <ChildCategory child={parent} setOpen={setOpen} />
      )}
    </>
  )
}

const CategoriesContent = ({ parent, setOpen }) => {
  const categories = useSelector(selectAllCategories)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'grey',
          mb: 2,
          mr: 2,
        }}
      >
        <Link
          to={`/products`}
          state={{ category: parent.id }}
          onClick={() => setOpen(false)}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: 'grey',

              '&:hover': {
                color: 'tomato',
                cursor: 'pointer',
              },
            }}
          >
            مشاهده تمام محصولات در دسته بندی {parent.name}
          </Typography>
        </Link>

        <KeyboardArrowLeft
          sx={{
            color: 'grey',
          }}
        />
      </Box>
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
              <FindParents
                parent={child}
                categories={categories}
                key={index}
                setOpen={setOpen}
              />
            )}
          </Fragment>
        ))}
      </Box>
    </>
  )
}

export default CategoriesContent
