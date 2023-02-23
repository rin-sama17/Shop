import { DataGrid } from '@mui/x-data-grid'
import { useGetDiscountsQuery } from '../../../api'
import AddDiscount from './AddDiscount'

const DiscountManagment = () => {
  const { data: discounts = [] } = useGetDiscountsQuery()

  const columns = [
    { field: 'name', headerName: 'نام تخفیف', width: 200 },
    { field: 'discount', headerName: 'درصد تخفیف', width: 150 },
    { field: 'category', headerName: 'دسته بندی', width: 150 },
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
