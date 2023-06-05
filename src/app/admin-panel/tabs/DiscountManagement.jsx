'use client'

import { getDiscounts } from '@/api'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useMemo } from 'react'

import { EditDiscount, AddDiscount } from '../components'

const DiscountManagement = () => {
  const { discounts } = getDiscounts('/admin')
  const deleteDiscount = async (discountId) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/discounts/delete/${discountId}`
      const res = await fetch(url, {
        method: 'DELETE',
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
    }
  }
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
            onClick={() => deleteDiscount(params.id)}
          />,
          <EditDiscount discountData={params.row} />,
        ],
      },
    ],
    [discounts, EditDiscountm],
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
