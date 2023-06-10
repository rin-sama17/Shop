import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { AddUser, EditUser } from '../components'
import { useEffect, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import {
  deleteUser,
  fetchUsers,
  selectAllUsers,
} from '../../../reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoles } from '../../../reducers/roleSlice'

const UserManagement = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchRoles())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'شماره', width: 10 },
      { field: 'firstname', headerName: 'نام', width: 110 },
      { field: 'lastname', headerName: 'نام خانوادگی', width: 110 },
      { field: 'email', headerName: 'ایمیل', width: 150 },
      { field: 'phone', headerName: 'شماره موبایل', width: 110 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
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
          rows={users}
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

export default UserManagement
