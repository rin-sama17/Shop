'use client'

import { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditPremission, AddPremission } from '../components'
import { getPremissions } from '@/api'

const PremissionManagement = () => {
  const data = getPremissions()
  const deletePremission = async (premissionId) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/premissions/delete/${premissionId}`
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
      { field: 'name', headerName: 'نام دسترسی', width: 150 },
      { field: 'description', headerName: 'توضیحات', width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => deletePremission(params.id)}
          />,
          <EditPremission premission={params.row} />,
        ],
      },
    ],
    [data.premission, EditPremission],
  )
  return (
    <>
      <AddPremission />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={data.premission} columns={columns} />
      </div>
    </>
  )
}

export default PremissionManagement
