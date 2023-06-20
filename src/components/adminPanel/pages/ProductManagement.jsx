import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { AddProduct, CustomNoRowsOverlay, EditProduct } from '../components'
import { useEffect, useMemo } from 'react'
import {
  deleteProduct,
  editProduct,
  fetchProducts,
  selectAllProducts,
} from '../../../reducers/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ChangeStatus from '../components/ChangeStatus'

const ProductManagement = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام محصول'), width: 100 },
      { field: 'price', headerName: t('قیمت'), width: 100 },
      { field: 'discount', headerName: t('تخفیف(به درصد)'), width: 120 },
      { field: 'remaining', headerName: t('موجودی'), width: 100 },
      { field: 'category_id', headerName: t('دسته بندی'), width: 100 },
      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          // <ChangeStatus item={params.row} editItem={editProduct} />,
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            onClick={() => dispatch(deleteProduct(params.id))}
          />,
          <EditProduct product={params.row} />,
        ],
      },
    ],
    [EditProduct, products, t],
  )
  return (
    <>
      <AddProduct />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
          sx={{
            overflowX: 'scroll',
          }}
        />
      </div>
    </>
  )
}

export default ProductManagement
