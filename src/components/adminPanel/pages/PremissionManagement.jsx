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
  selectPremissionLoading,
} from '../../../reducers/premissionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ChangeStatus from '../components/ChangeStatus'
import CustomDataGrid from '../components/CustomDataGrid'
import { showStatus } from '../components/ShowStatus'

const PremissionManagement = () => {
  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const loading = useSelector(selectPremissionLoading)

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchPremissions())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام دسترسی'), width: 150 },
      { field: 'description', headerName: t('توضیحات'), width: 150 },
      {
        field: 'status',
        align: 'center',
        type: 'boolean',
        headerName: t('نمایش'),
        width: 90,
        editable: false,
        valueGetter: showStatus,
      },
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
      <CustomDataGrid rows={premissions} columns={columns} loading={loading} />
    </>
  )
}

export default PremissionManagement
