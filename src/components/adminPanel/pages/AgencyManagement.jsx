import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { EditAgency, AddAgency, CustomNoRowsOverlay } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAgency,
  fetchAgencies,
  selectAllAgencies,
} from '../../../reducers/agencySlice'

const AgencyManagement = () => {
  const dispatch = useDispatch()
  const agencies = useSelector(selectAllAgencies)

  useEffect(() => {
    dispatch(fetchAgencies())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام', width: 100 },
      { field: 'address', headerName: 'ادرس', width: 150 },
      { field: 'phone', headerName: 'شماره تلفن', width: 150 },
      { field: 'email', headerName: 'ایمیل', width: 200 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => dispatch(deleteAgency(params.id))}
          />,
          <EditAgency agency={params.row} />,
        ],
      },
    ],
    [agencies, EditAgency],
  )
  return (
    <>
      <AddAgency />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid
          rows={agencies}
          columns={columns}
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
        />
      </div>
    </>
  )
}

export default AgencyManagement
