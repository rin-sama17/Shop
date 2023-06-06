import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditDiscount, AddDiscount } from '../components'
import { useDeleteDiscountMutation, useGetDiscountsQuery } from '../../../api'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteDiscount,
  fetchDiscounts,
  selectAllDiscounts,
} from '../../../reducers/discountSlice'
import { useEffect, useMemo } from 'react'

const DiscountManagement = () => {
  const dispatch = useDispatch()
  const discounts = useSelector(selectAllDiscounts)
  useEffect(() => {
    dispatch(fetchDiscounts())
  }, [])
  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام تخفیف', width: 150 },
      { field: 'discount', headerName: 'درصد تخفیف', width: 100 },
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
            onClick={() => dispatch(deleteDiscount(params.id))}
          />,
          <EditDiscount discountData={params.row} />,
        ],
      },
    ],
    [discounts, EditDiscount],
  )
  return (
    <>
      <AddDiscount />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={discounts} columns={columns} />
      </div>
    </>
  )
}

export default DiscountManagement
