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
import { showStatus } from '../components/ShowStatus'
import CustomDataGrid from '../components/CustomDataGrid'

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
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام'), width: 150 },
      { field: 'description', headerName: t('توضیحات'), width: 200 },
      {
        field: 'status',
        headerName: t('وضعیت'),
        width: 90,
        valueGetter: showStatus,
      },

      {
        field: 'actions',
        type: 'actions',
        width: 150,
        getActions: (params) => [
          <ShowOptions
            options={params.row.premissions}
            name={t('دسترسی ها')}
          />,
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
      <CustomDataGrid rows={roles} columns={columns} />
    </>
  )
}

export default RoleManagement
