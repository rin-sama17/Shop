import { useMemo } from 'react'
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

const CategoryManagement = () => {
  const { data: categories = { data: [] } } = useGetCategoriesQuery()

  const [deleteCategory] = useDeleteCategoryMutation()
  const handleCategoryDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام دسته بندی', width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [<EditCategory category={params.row} />],
      },
    ],
    [categories.data, EditCategory],
  )
  return (
    <>
      <AddCategory />
      <Box sx={{ direction: 'ltr', minHeight: '50vh' }}>
        <Box sx={{ display: 'flex', bgcolor: 'white', p: 1 }}>
          <Typography sx={{ width: 50 }} textAlign="center">
            شماره
          </Typography>
          <Divider orientation="vertical" flexItems sx={{ mx: 2 }} />
          <Typography>نام</Typography>
        </Box>
        {categories.data.map((parent, index) => (
          <Box key={index}>
            {parent.category_id === null ? (
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
                      <Typography sx={{ width: 40 }} textAlign="center">
                        {parent.id}
                      </Typography>
                      <Divider
                        orientation="vertical"
                        flexItems
                        sx={{ mx: 2 }}
                      />
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
                <AccordionDetails sx={{ bgcolor: 'bgcolor.main', p: 0.5 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      p: 1,
                      width: '90%',
                      m: '0 0 0 auto',
                    }}
                  >
                    <Typography sx={{ width: 50 }} textAlign="center">
                      شماره
                    </Typography>
                    <Divider orientation="vertical" flexItems sx={{ mx: 2 }} />
                    <Typography>نام</Typography>
                  </Box>
                  {categories.data.map((child, index) => (
                    <Box key={index} sx={{ my: 2 }}>
                      {child.category_id === parent.id ? (
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
                            <Divider
                              orientation="vertical"
                              flexItems
                              sx={{ mx: 2 }}
                            />
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
                      ) : null}
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            ) : null}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default CategoryManagement
