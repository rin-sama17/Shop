import { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditCategory, AddCategory } from '../components'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../../api'

const CategoryManagement = () => {
  const { data: categories = { data: [] } } = useGetCategoriesQuery({
    prefix: '/admin',
  })

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
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => handleCategoryDelete(params.id)}
          />,
          <EditCategory category={params.row} />,
        ],
      },
    ],
    [categories.data, EditCategory],
  )
  return (
    <>
      <AddCategory />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={categories.data} columns={columns} />
      </div>
    </>
  )
}

export default CategoryManagement
