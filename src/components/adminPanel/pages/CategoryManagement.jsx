import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useDeleteCategoryMutation, useGetCategorysQuery } from '../../../api'
import AddCategory from './AddCategory'
import { useRef, useLayoutEffect } from 'react'
import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const DeleteCategory = (props) => {
  const { hasFocus, value } = props
  const buttonElement = useRef(null)
  const rippleRef = useRef(null)
  const [deleteCategory] = useDeleteCategoryMutation()

  const handleCategoryDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }
  useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector('input')
      input?.focus()
      handleCategoryDelete(value)
    } else if (rippleRef.current) {
      rippleRef.current.stop({})
    }
  }, [hasFocus])

  return (
    <strong>
      <Button
        color="error"
        ref={buttonElement}
        touchRippleRef={rippleRef}
        style={{ marginLeft: 16 }}
        tabIndex={hasFocus ? 0 : -1}
        onKeyDown={(event) => {
          if (event.key === ' ') {
            event.stopPropagation()
          }
        }}
      >
        حذف
      </Button>
    </strong>
  )
}

const CategoryManagement = () => {
  const { data: categorys = [] } = useGetCategorysQuery()
  const columns = [
    { field: 'name', headerName: 'نام دسته بندی', width: 100 },
    {
      field: 'edit',
      headerName: 'ویرایش',
      sortable: false,
      width: 150,
      valueGetter: (params) => params.row.id,
      renderCell: ({ value }) => (
        <Button component={Link} to={`/editProduct/${value}`}>
          ویرایش
        </Button>
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      width: 40,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Delete />}
          sx={{ color: 'tomato' }}
          label="حذف"
          // onClick={() => handleCommentDelete(params.id)}
        />,
      ],
    },
  ]
  return (
    <>
      <AddCategory />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={categorys} columns={columns} />
      </div>
    </>
  )
}

export default CategoryManagement
