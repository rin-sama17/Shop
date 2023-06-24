import {
  AddRole,
  ConfirmDelete,
  EditRole,
  ShowOptions,
  CustomDataGrid,
  NoAccessError,
} from '../components'
import { useEffect, useMemo } from 'react'
import {
  deleteRole,
  editRole,
  fetchRoles,
  selectAllRoles,
  selectRoleDetails,
} from '../../../reducers/roleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPremissions } from '../../../reducers/premissionSlice'
import { useTranslation } from 'react-i18next'
import { showStatus } from '../components/ShowStatus'

const RoleManagement = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const roles = useSelector(selectAllRoles)
  const { loading, access } = useSelector(selectRoleDetails)
  const isLoading = Boolean(!(roles.length > 0) && loading)

  useEffect(() => {
    dispatch(fetchPremissions())
    dispatch(fetchRoles())
  }, [])
  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام'), width: 150 },
      { field: 'description', headerName: t('توضیحات'), width: 200 },
      {
        type: 'actions',
        align: 'center',
        headerName: t('نمایش'),
        width: 80,
        editable: false,
        getActions: (params) => showStatus(params, editRole),
      },
      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          <ShowOptions
            options={params.row.premissions}
            name={t('دسترسی ها')}
          />,
          <ConfirmDelete item={params.row} itemDelete={deleteRole} />,
          <EditRole role={params.row} />,
        ],
      },
    ],
    [roles, t],
  )

  if (!loading && !access) {
    return <NoAccessError />
  }
  return (
    <>
      <AddRole />
      <CustomDataGrid rows={roles} columns={columns} loading={isLoading} />
    </>
  )
}

export default RoleManagement
