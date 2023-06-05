'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Delete, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material'
import { EditCategory, AddCategory } from '../components'
import { getCategories } from '@/api'
import { CustomIconButton } from '../../common'

export const deleteCategory = async (categoryId) => {
  'use server'

  try {
    const url = `http://127.0.0.1:8000/api/admin/categories/delete/${categoryId}`
    const res = await fetch(url, {
      method: 'DELETE',
    })

    const jsonResponse = await res.json()
    const status = res.status

    console.log(status)
    console.log(jsonResponse)
  } catch (error) {
    console.error(error)
  }
}

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
          <Typography>{parent.name}</Typography>
          <Box>
            <EditCategory category={parent} />
            <CustomIconButton
              icon={<Delete />}
              sx={{ color: 'tomato' }}
              label="حذف"
              onClick={() => deleteCategory(parent.id)}
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
      <Typography sx={{ ml: 2 }}>{child.name}</Typography>
      <Box>
        <EditCategory category={child} />
        <CustomIconButton
          icon={<Delete />}
          sx={{ color: 'tomato' }}
          label="حذف"
          onClick={() => deleteCategory(child.id)}
        />
      </Box>
    </Box>
  )
}

const FindParents = ({ parent }) => {
  const { categories } = getCategories('/admin')
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
  const { categories } = getCategories('/admin')
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
