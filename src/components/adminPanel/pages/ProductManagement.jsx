import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../api'
import { AddProduct, EditProduct } from '../components'
import { useMemo } from 'react'

const ProductManagement = () => {
  const { data: products = { data: [] } } = useGetProductsQuery({
    prefix: '/admin',
  })
  const [deleteProduct] = useDeleteProductMutation()
  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }
  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ای دی', width: 100 },
      { field: 'name', headerName: 'نام محصول', width: 100 },
      { field: 'price', headerName: 'قیمت', width: 100 },
      { field: 'discount', headerName: 'تخفیف(به درصد)', width: 120 },
      { field: 'remaining', headerName: 'موجودی', width: 100 },
      { field: 'category_id', headerName: 'دسته بندی', width: 100 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => handleDelete(params.id)}
          />,
          <EditProduct product={params.row} />,
        ],
      },
    ],
    [handleDelete, products.data],
  )
  return (
    <>
      <AddProduct />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={products.data} columns={columns} />
      </div>
    </>
  )
}

export default ProductManagement
