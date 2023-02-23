import { useGetCartsQuery } from '../../../api'

import { DataGrid } from '@mui/x-data-grid'

import OrderProducts from './OrderProducts'

const OrderManagement = () => {
  const { data: carts = [] } = useGetCartsQuery()

  const columns = [
    { field: 'id', headerName: 'ای دی سبد', width: 100 },
    { field: 'fullName', headerName: 'نام کاربر', width: 100 },
    { field: 'phone', headerName: 'شماره کاربر', width: 150 },
    { field: 'address', headerName: 'ادرس خریدار', width: 200 },

    {
      field: 'products',
      headerName: 'محصولات',
      width: 100,
      renderCell: OrderProducts,
    },
  ]
  return (
    <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
      <DataGrid rows={carts} columns={columns} />
    </div>
  )
}

export default OrderManagement
