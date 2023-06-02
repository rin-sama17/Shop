import { useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditPremission, AddPremission } from '../components'
import {
  useDeletePremissionMutation,
  useGetPremissionsQuery,
} from '../../../api'

const PremissionManagement = () => {
  // const { data: premission = [] } = useGetPremissionsQuery({ prefix: '/admin' })
  const premission = []
  const [deletePremission] = useDeletePremissionMutation()
  const handlePremissionDelete = async (premissionId) => {
    try {
      await deletePremission(premissionId).unwrap()
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
            onClick={() => handlePremissionDelete(params.id)}
          />,
          <EditPremission premission={params.row} />,
        ],
      },
    ],
    [premission, EditPremission],
  )
  return (
    <>
      <AddPremission />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={premission} columns={columns} />
      </div>
    </>
  )
}

export default PremissionManagement
