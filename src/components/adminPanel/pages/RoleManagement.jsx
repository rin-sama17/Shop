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
  editRole,
  fetchRoles,
  selectAllRoles,
  selectPremission_id,
} from '../../../reducers/roleSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPremissions,
  selectAllPremissions,
} from '../../../reducers/premissionSlice'
import { useTranslation } from 'react-i18next'
import ChangeStatus from '../components/ChangeStatus'

const RoleManagement = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

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
      { field: 'id', headerName: t('شماره'), width: 10 },
      { field: 'name', headerName: t('نام'), width: 150 },
      { field: 'description', headerName: t('توضیحات'), width: 200 },
      {
        field: 'status',
        headerName: t('وضعیت'),
        width: 120,
      },
      {
        field: 'premissions',
        type: 'actions',
        width: 10,
        getActions: (params) => [
          <ShowOptions
            options={params.row.premissions}
            name={t('دسترسی ها')}
          />,
        ],
      },
      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          <ChangeStatus item={params.row} editItem={editRole} />,
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            onClick={() => handleDelete(params.id)}
          />,
          <EditRole role={params.row} />,
        ],
      },
    ],
    [roles, t],
  )
  return (
    <>
      <AddRole />
      <Box
        sx={{
          height: 600,
          width: '100%',
        }}
      >
        <DataGrid
          columns={columns}
          rows={roles}
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
          sx={{
            overflowX: 'scroll',
          }}
        />
      </Box>
    </>
  )
}

export default RoleManagement
