import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import {
  useDeleteProductMutation,
  useGetAdminProductsQuery,
} from '../../../api'
import { AddProduct } from '../components'

const ProductManagement = () => {
  const { data: products = [] } = useGetAdminProductsQuery()
  const [deleteProduct] = useDeleteProductMutation()
  const handleProductDelete = async (productId) => {
    try {
      await deleteProduct(productId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  const columns = [
    { field: 'id', headerName: 'ای دی', width: 100 },
    { field: 'name', headerName: 'نام محصول', width: 100 },
    { field: 'price', headerName: 'قیمت', width: 100 },
    { field: 'discount', headerName: 'تخفیف(به درصد)', width: 120 },
    { field: 'stock', headerName: 'موجودی', width: 100 },
    { field: 'category', headerName: 'دسته بندی', width: 100 },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Delete />}
          sx={{ color: 'tomato' }}
          label="حذف"
          onClick={() => handleProductDelete(params.id)}
        />,
        <GridActionsCellItem
          icon={<Edit />}
          color="info"
          label="ویرایش"
          component={Link}
          to={`/product/edit/${params.id}`}
        />,
      ],
    },
  ]

  return (
    <>
      <AddProduct />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    </>
  )
}

export default ProductManagement
