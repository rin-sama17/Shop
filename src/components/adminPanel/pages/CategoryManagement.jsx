import { useEffect, useMemo } from 'react'
import { Delete, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from '@mui/material'
import { EditCategory, AddCategory, CustomNoRowsOverlay } from '../components'
import { CustomIconButton } from '../../common'
import {
  deleteCategory,
  fetchCategories,
  selectAllCategories,
} from '../../../reducers/categorySlice'
import { useDispatch, useSelector } from 'react-redux'

const CategoryHewder = ({ parent }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        px: parent ? 0 : 1,
        py: 1,
        width: parent ? 1 : '89%',
        m: '0 0 0 auto',
      }}
    >
      <Typography>نام</Typography>
    </Box>
  )
}

const ParentCategory = ({ parent, children }) => {
  const dispatch = useDispatch()

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box
          sx={{
            width: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ ml: 2 }}>{parent.name}</Typography>
            <Divider orientation="vertical" sx={{ mx: 2 }} />
          </Box>
          <Box>
            <EditCategory category={parent} />
            <CustomIconButton
              icon={<Delete />}
              sx={{ color: 'tomato' }}
              label="حذف"
              onClick={() => dispatch(deleteCategory(parent.id))}
            />
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ bgcolor: 'bgcolor.main', p: 0.2 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

const ChildCategory = ({ child }) => {
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        justifyContent: 'space-between',
        m: '0 0 0 auto',
        p: 1,
        '.MuiSvgIcon-fontSizeMedium': {
          width: '20px !important',
          height: '20px !important',
        },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ ml: 2 }}>{child.name}</Typography>
        <Divider orientation="vertical" flexItems sx={{ mx: 2 }} />
      </Box>
      <Box>
        <EditCategory category={child} />
        <CustomIconButton
          icon={<Delete />}
          sx={{ color: 'tomato' }}
          label="حذف"
          onClick={() => dispatch(deleteCategory(child.id))}
        />
      </Box>
    </Box>
  )
}
const FindParents = ({ parent, categories }) => {
  const children = useMemo(
    () => categories.filter((child) => child.category_id === parent.id),
    [categories, parent],
  )
  console.log(children)

  return (
    <>
      {children.length > 0 ? (
        <Box
          sx={{
            width: '90%',
            m: '0 0 0 auto',
            my: 1,
            '.MuiSvgIcon-fontSizeMedium': {
              width: '20px !important',
              height: '20px !important',
            },
          }}
        >
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

const CategoryManagement = () => {
  const categories = useSelector(selectAllCategories)

  return (
    <>
      <AddCategory />
      {categories.length > 0 ? (
        <Box sx={{ direction: 'ltr', minHeight: '50vh' }}>
          <CategoryHewder parent />
          {categories.map((layer1, index) => (
            <Box key={index}>
              {layer1.category_id === null && (
                <ParentCategory parent={layer1}>
                  {categories.map((child, index) => (
                    <>
                      {child.category_id === layer1.id && (
                        <FindParents
                          parent={child}
                          categories={categories}
                          key={index}
                        />
                      )}
                    </>
                  ))}
                </ParentCategory>
              )}
            </Box>
          ))}
        </Box>
      ) : (
        <CustomNoRowsOverlay />
      )}
    </>
  )
}

export default CategoryManagement
