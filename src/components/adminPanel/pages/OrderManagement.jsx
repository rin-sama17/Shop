import { DataGrid } from '@mui/x-data-grid'

import { OrderProducts } from '../components'
import { useGetCartsQuery } from '../../../api'
import { Box } from '@mui/material'

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
    <Box
      sx={{
        height: 600,
        width: '100%',
        direction: 'ltr',
        '& .phone': {
          direction: 'rtl',
        },
      }}
    >
      <DataGrid
        rows={carts}
        columns={columns}
        getCellClassName={(params) => {
          if (params.field === 'phone') {
            return 'phone'
          }
        }}
      />
    </Box>
  )
}

export default OrderManagement
