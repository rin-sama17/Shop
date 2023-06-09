import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { AddRole, EditRole } from '../components'
import { useEffect, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import {
  deleteRole,
  fetchRoles,
  selectAllRoles,
} from '../../../reducers/roleSlice'
import { useDispatch, useSelector } from 'react-redux'

const RoleManagement = () => {
  const dispatch = useDispatch()
  const roles = useSelector(selectAllRoles)
  useEffect(() => {
    dispatch(fetchRoles())
  }, [])

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
            onClick={() => dispatch(deleteRole(params.id))}
          />,
          <EditRole role={params.row} />,
        ],
      },
    ],
    [EditRole, roles],
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
          rows={roles}
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
