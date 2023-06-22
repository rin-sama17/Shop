import { Delete } from '@mui/icons-material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { AddProduct, EditProduct } from '../components'
import { useEffect, useMemo } from 'react'
import {
  deleteProduct,
  editProduct,
  fetchProducts,
  selectAllProducts,
  selectProductDetails,
} from '../../../reducers/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { showCategory } from '../components/ShowCategory'
import { showStatus } from '../components/ShowStatus'

import CustomDataGrid from '../components/CustomDataGrid'
import NoAccessError from '../components/NoAccessError'

const ProductManagement = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const { loading, access } = useSelector(selectProductDetails)
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
        type: 'actions',
        align: 'center',
        headerName: t('نمایش'),
        width: 80,
        editable: false,
        getActions: (params) => showStatus(params, editProduct),
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
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

  if (!loading && !access) {
    return <NoAccessError />
  }
  return (
    <>
      <AddProduct />
      <CustomDataGrid rows={products} columns={columns} loading={loading} />
    </>
  )
}

export default ProductManagement
