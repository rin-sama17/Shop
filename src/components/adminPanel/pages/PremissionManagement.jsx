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
  selectPremissionDetails,
} from '../../../reducers/premissionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ChangeStatus from '../components/ChangeStatus'

import CustomDataGrid from '../components/CustomDataGrid'
import NoAccessError from '../components/NoAccessError'
import { showStatus } from '../components/ShowStatus'

const PremissionManagement = () => {
  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const { loading, access } = useSelector(selectPremissionDetails)

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
        type: 'actions',
        align: 'center',
        headerName: t('نمایش'),
        width: 80,
        editable: false,
        getActions: (params) => showStatus(params, editPremission),
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
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

  if (!loading && !access) {
    return <NoAccessError />
  }
  return (
    <>
      <AddPremission />
      <CustomDataGrid rows={premissions} columns={columns} loading={loading} />
    </>
  )
}

export default PremissionManagement
