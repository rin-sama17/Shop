import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { useDeleteRoleMutation, useGetRolesQuery } from '../../../api'
import { AddRole, EditRole } from '../components'
import { useMemo } from 'react'
import { Box, Typography } from '@mui/material'

const RoleManagement = () => {
  const { data: roles = [] } = useGetRolesQuery({ prefix: '/admin' })
  console.log(roles)
  const [deleteRole] = useDeleteRoleMutation()

  const handleRoleDelete = async (roleId) => {
    try {
      await deleteRole(roleId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ای دی', width: 10 },
      { field: 'title', headerName: 'نام', width: 150 },
      { field: 'details', headerName: 'توضیحات', width: 200 },

      {
        field: 'addPost',
        headerName: 'افزودن پست',
        type: 'boolean',
        width: 120,
      },
      {
        field: 'addPost',
        headerName: 'ویرایش پست',
        type: 'boolean',
        width: 120,
      },
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
            onClick={() => handleRoleDelete(params.id)}
          />,
          <EditRole role={params.row} />,
        ],
      },
    ],
    [handleRoleDelete, roles],
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

// const RoleManagement = () => {
//
//   return (
//     <>
//       <AddRole />

//     </>
//   )
// }

// export default RoleManagement
