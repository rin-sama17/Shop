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
import { showCategory } from '../components/ShowCategory'
import { showStatus } from '../components/ShowStatus'
import CustomDataGrid from '../components/CustomDataGrid'

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
      {
        field: 'category_id',
        headerName: t('دسته بندی'),
        width: 100,
        valueGetter: showCategory,
      },
      {
        field: 'status',
        headerName: t('وضعیت'),
        width: 90,
        valueGetter: showStatus,
      },

      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
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
      <CustomDataGrid rows={products} columns={columns} />
    </>
  )
}

export default ProductManagement
