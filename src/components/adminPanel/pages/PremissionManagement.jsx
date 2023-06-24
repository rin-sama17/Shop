import { useEffect, useMemo } from 'react'

import {
  EditPremission,
  AddPremission,
  ConfirmDelete,
  CustomDataGrid,
  NoAccessError,
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

import { showStatus } from '../components/ShowStatus'

const PremissionManagement = () => {
  const dispatch = useDispatch()
  const premissions = useSelector(selectAllPremissions)
  const { loading, access } = useSelector(selectPremissionDetails)
  const isLoading = Boolean(!(premissions.length > 0) && loading)

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
          <ConfirmDelete item={params.row} itemDelete={deletePremission} />,
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
      <CustomDataGrid
        rows={premissions}
        columns={columns}
        loading={isLoading}
      />
    </>
  )
}

export default PremissionManagement
