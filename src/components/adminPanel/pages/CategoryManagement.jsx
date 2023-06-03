import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { Delete, ExpandMore } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  MenuItem,
  Divider,
} from '@mui/material'
import { EditCategory, AddCategory } from '../components'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../../api'
import { CustomIconButton } from '../../common'

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
      <Typography textAlign="center">شماره</Typography>
      <Divider orientation="vertical" flexItems sx={{ mx: 1.4 }} />
      <Typography>نام</Typography>
    </Box>
  )
}

const ParentCategory = ({ parent, children }) => {
  const [deleteCategory] = useDeleteCategoryMutation()
  const handleCategoryDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ pl: 0 }}>
        <Box
          sx={{
            width: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ width: 40 }} textAlign="center">
              {parent.id}
            </Typography>
            <Divider orientation="vertical" flexItems sx={{ mx: 2 }} />
            <Typography>{parent.name}</Typography>
          </Box>
          <Box>
            <EditCategory category={parent} />
            <CustomIconButton
              icon={<Delete />}
              sx={{ color: 'tomato' }}
              label="حذف"
              onClick={() => handleCategoryDelete(parent.id)}
            />
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ bgcolor: 'bgcolor.main', p: 0.2 }}>
        <CategoryHewder />
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

const ChildCategory = ({ child }) => {
  const [deleteCategory] = useDeleteCategoryMutation()
  const handleCategoryDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        justifyContent: 'space-between',
        m: '0 0 0 auto',
        '.MuiSvgIcon-fontSizeMedium': {
          width: '20px !important',
          height: '20px !important',
        },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ width: 40 }} textAlign="center">
          {child.id}
        </Typography>
        <Divider orientation="vertical" flexItems sx={{ mx: 2 }} />
        <Typography>{child.name}</Typography>
      </Box>
      <Box>
        <EditCategory category={child} />
        <CustomIconButton
          icon={<Delete />}
          sx={{ color: 'tomato' }}
          label="حذف"
          onClick={() => handleCategoryDelete(child.id)}
        />
      </Box>
    </Box>
  )
}

const FindParents = ({ parent }) => {
  const { data: categories = { data: [] } } = useGetCategoriesQuery()
  const [children, setChildern] = useState([])
  useEffect(() => {
    const filteredChild = categories.data.filter(
      (child) => child.category_id === parent.id,
    )
    setChildern(filteredChild)
  }, [categories])
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
            {children.map((child) => (
              <ChildCategory child={child} />
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
  const { data: categories = { data: [] } } = useGetCategoriesQuery()

  return (
    <>
      <AddCategory />
      <Box sx={{ direction: 'ltr', minHeight: '50vh' }}>
        <CategoryHewder parent />
        {categories.data.map((parent, index) => (
          <Box key={index}>
            {parent.category_id === null && (
              <ParentCategory parent={parent}>
                {categories.data.map((child) => (
                  <>
                    {child.category_id === parent.id && (
                      <FindParents parent={child} />
                    )}
                  </>
                ))}
              </ParentCategory>
            )}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default CategoryManagement
