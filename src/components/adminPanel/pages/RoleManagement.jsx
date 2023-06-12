import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import {
  AddRole,
  CustomNoRowsOverlay,
  EditRole,
  ShowOptions,
} from '../components'
import { useEffect, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import {
  deleteRole,
  fetchRoles,
  selectAllRoles,
  selectPremission_id,
} from '../../../reducers/roleSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPremissions,
  selectAllPremissions,
} from '../../../reducers/premissionSlice'

const RoleManagement = () => {
  const dispatch = useDispatch()

  const roles = useSelector(selectAllRoles)

  useEffect(() => {
    dispatch(fetchPremissions())
    dispatch(fetchRoles())
  }, [])
  const handleDelete = (roleId) => {
    dispatch(deleteRole(roleId))
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
        field: 'premissions',
        type: 'actions',
        width: 10,
        getActions: (params) => [
          <ShowOptions options={params.row.premissions} name="دسترسی ها" />,
        ],
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
            onClick={() => handleDelete(params.id)}
          />,
          <EditRole role={params.row} />,
        ],
      },
    ],
    [roles],
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
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
        />
      </Box>
    </>
  )
}

export default RoleManagement
