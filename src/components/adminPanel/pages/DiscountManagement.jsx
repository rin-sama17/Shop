import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useDeleteDiscountMutation, useGetDiscountsQuery } from '../../../api'
import AddDiscount from './AddDiscount'
import { Delete } from '@mui/icons-material'
import { toast } from 'react-toastify'
import EditDiscount from './EditDiscount'

const DiscountManagment = () => {
  const { data: discounts = [] } = useGetDiscountsQuery()
  const [deleteDiscount] = useDeleteDiscountMutation()
  const handleDiscountDelete = async (discountId) => {
    try {
      await deleteDiscount(discountId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }
  const columns = [
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
          onClick={() => handleDiscountDelete(params.id)}
        />,
        <EditDiscount discountData={params.row} />,
      ],
    },
  ]
  return (
    <>
      <AddDiscount />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={discounts} columns={columns} />
      </div>
    </>
  )
}

export default DiscountManagment
