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
import { useTranslation } from 'react-i18next'

const AgencyManagement = () => {
  const dispatch = useDispatch()
  const agencies = useSelector(selectAllAgencies)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchAgencies())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'name', headerName: t('نام'), width: 100 },
      { field: 'address', headerName: t('ادرس'), width: 150 },
      { field: 'phone', headerName: t('شماره تلفن'), width: 150 },
      { field: 'email', headerName: t('ایمیل'), width: 200 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            onClick={() => dispatch(deleteAgency(params.id))}
          />,
          <EditAgency agency={params.row} />,
        ],
      },
    ],
    [agencies, EditAgency, t],
  )
  return (
    <>
      <AddAgency />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={agencies}
          columns={columns}
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
          sx={{
            overflowX: 'scroll',
          }}
        />
      </div>
    </>
  )
}

export default AgencyManagement
