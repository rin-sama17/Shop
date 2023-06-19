import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import {
  EditPremission,
  AddPremission,
  CustomNoRowsOverlay,
} from '../components'

import {
  deletePremission,
  editPremission,
  fetchPremissions,
  selectAllPremissions,
} from '../../../reducers/premissionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ChangeStatus from '../components/ChangeStatus'

const PremissionManagement = () => {
  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchPremissions())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'name', headerName: t('نام دسترسی'), width: 150 },
      { field: 'description', headerName: t('توضیحات'), width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          <ChangeStatus item={params.row} editItem={editPremission} />,
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            onClick={() => dispatch(deletePremission(params.id))}
          />,
          <EditPremission premission={params.row} />,
        ],
      },
    ],
    [premissions, EditPremission, t],
  )
  return (
    <>
      <AddPremission />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={premissions}
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

export default PremissionManagement
