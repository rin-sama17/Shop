'use client'

import { useMemo } from 'react'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditAgency, AddAgency } from '../components'
import { getAgency } from '@/api'

const AgencyManagement = () => {
  const { agencies } = getAgency('/admin')
  const deleteAgency = async (agencyId) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/agencies/delete/${agencyId}`
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
      { field: 'name', headerName: 'نام', width: 100 },
      { field: 'address', headerName: 'ادرس', width: 150 },
      { field: 'phone', headerName: 'شماره تلفن', width: 150 },
      { field: 'email', headerName: 'ایمیل', width: 200 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => deleteAgency(params.id)}
          />,
          <EditAgency agency={params.row} />,
        ],
      },
    ],
    [agencies.agencies, EditAgency],
  )
  return (
    <>
      <AddAgency />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={agencies.agencies} columns={columns} />
      </div>
    </>
  )
}

export default AgencyManagement
