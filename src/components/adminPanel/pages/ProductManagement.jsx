import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../api'
import { AddProduct, EditProduct } from '../components'
import { useEffect, useMemo } from 'react'
import {
  deleteProduct,
  fetchProducts,
  selectAllProducts,
} from '../../../reducers/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductManagement = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'شماره', width: 100 },
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
            onClick={() => dispatch(deleteProduct(params.id))}
          />,
          <EditProduct product={params.row} />,
        ],
      },
    ],
    [EditProduct, products],
  )
  return (
    <>
      <AddProduct />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={products} columns={columns} />
      </div>
    </>
  )
}

export default ProductManagement
