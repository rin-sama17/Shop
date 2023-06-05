'use client'

import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { AddRole, EditRole } from '../components'
import { useMemo } from 'react'
import { Box } from '@mui/material'
import { getRoles } from '@/api'

const RoleManagement = () => {
  const { roles } = getRoles
  const deleteRole = async (roleId) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/roles/delete/${roleId}`
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
      { field: 'id', headerName: 'شماره', width: 10 },
      { field: 'name', headerName: 'نام', width: 150 },
      { field: 'description', headerName: 'توضیحات', width: 200 },
      {
        field: 'status',
        headerName: 'وضعیت',
        width: 120,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => deleteRole(params.id)}
          />,
          <EditRole role={params.row} />,
        ],
      },
    ],
    [EditRole, roles.data[0]],
  )

  return (
    <>
      <AddRole />
      <Box
        sx={{
          height: 600,
          width: '100%',
          direction: 'ltr',
          mt: '8px',
          overFlowX: 'auto',
          '& .phone': {
            direction: 'rtl',
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={roles.data[0]}
          getCellClassName={(params) => {
            if (params.field === 'phone') {
              return 'phone'
            }
          }}
        />
      </Box>
    </>
  )
}

export default RoleManagement
