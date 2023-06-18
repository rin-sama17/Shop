import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import {
  AddUser,
  CustomNoRowsOverlay,
  EditUser,
  ShowOptions,
} from '../components'
import { useEffect, useMemo } from 'react'
import { Box, Typography, Button } from '@mui/material'
import {
  deleteUser,
  fetchUsers,
  selectAllUsers,
} from '../../../reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoles } from '../../../reducers/roleSlice'
import { useTranslation } from 'react-i18next'

const UserManagement = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const users = useSelector(selectAllUsers)
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchRoles())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 10 },
      { field: 'firstname', headerName: t('نام'), width: 110 },
      { field: 'lastname', headerName: t('نام خانوادگی'), width: 110 },
      { field: 'email', headerName: t('ایمیل'), width: 150 },
      { field: 'phone', headerName: t('شماره موبایل'), width: 110 },
      {
        field: 'roles',
        type: 'actions',
        width: 10,
        getActions: (params) => [
          <ShowOptions options={params.row.roles} name={t('نقش ها')} />,
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
            onClick={() => dispatch(deleteUser(params.id))}
          />,
          <EditUser user={params.row} />,
        ],
      },
    ],
    [EditUser, users],
  )

  return (
    <>
      <AddUser />
      <Box
        sx={{
          height: 600,
          width: '100%',

          mt: '8px',
          overFlowX: 'auto',
          '& .phone': {
            direction: 'rtl',
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={users}
          getCellClassName={(params) => {
            if (params.field === 'phone') {
              return 'phone'
            }
          }}
          sx={{ direction: 'rtl', overflowX: 'scroll' }}
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
        />
      </Box>
    </>
  )
}

export default UserManagement
