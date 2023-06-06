import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditPremission, AddPremission } from '../components'
import {
  useDeletePremissionMutation,
  useGetPremissionsQuery,
} from '../../../api'
import {
  deletePremission,
  fetchPremissions,
  selectAllPremissions,
} from '../../../reducers/premissionSlice'
import { useDispatch, useSelector } from 'react-redux'

const PremissionManagement = () => {
  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  useEffect(() => {
    dispatch(fetchPremissions())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام دسترسی', width: 150 },
      { field: 'description', headerName: 'توضیحات', width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => dispatch(deletePremission(params.id))}
          />,
          <EditPremission premission={params.row} />,
        ],
      },
    ],
    [premissions, EditPremission],
  )
  return (
    <>
      <AddPremission />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={premissions} columns={columns} />
      </div>
    </>
  )
}

export default PremissionManagement
