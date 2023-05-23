import { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditAccess, AddAccess } from '../components'
import { useDeleteAccessMutation, useGetAllAccessQuery } from '../../../api'

const AccessManagement = () => {
  const { data: access = [] } = useGetAllAccessQuery()

  const [deleteAccess] = useDeleteAccessMutation()
  const handleAccessDelete = async (accessId) => {
    try {
      await deleteAccess(accessId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const columns = useMemo(
    () => [
      { field: 'title', headerName: 'نام دسترسی', width: 150 },
      { field: 'details', headerName: 'توضیحات', width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => handleAccessDelete(params.id)}
          />,
          <EditAccess access={params.row} />,
        ],
      },
    ],
    [access, EditAccess],
  )
  return (
    <>
      <AddAccess />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={access} columns={columns} />
      </div>
    </>
  )
}

export default AccessManagement
