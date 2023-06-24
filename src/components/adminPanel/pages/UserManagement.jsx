import {
  AddUser,
  ConfirmDelete,
  EditUser,
  ShowOptions,
  CustomDataGrid,
  NoAccessError,
} from '../components'
import { useEffect, useMemo } from 'react'
import {
  deleteUser,
  fetchUsers,
  selectAllUsers,
  selectUserDetails,
} from '../../../reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoles } from '../../../reducers/roleSlice'
import { useTranslation } from 'react-i18next'

const UserManagement = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const users = useSelector(selectAllUsers)
  const { loading, access } = useSelector(selectUserDetails)
  const isLoading = Boolean(!(users.length > 0) && loading)
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchRoles())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },

      { field: 'firstname', headerName: t('نام'), width: 110 },
      { field: 'lastname', headerName: t('نام خانوادگی'), width: 110 },
      { field: 'email', headerName: t('ایمیل'), width: 150 },
      { field: 'phone', headerName: t('شماره موبایل'), width: 110 },

      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          <ShowOptions options={params.row.roles} name={t('نقش ها')} />,
          <ConfirmDelete item={params.row} itemDelete={deleteUser} />,
          <EditUser user={params.row} />,
        ],
      },
    ],
    [EditUser, users, t],
  )

  if (!loading && !access) {
    return <NoAccessError />
  }
  return (
    <>
      <AddUser />
      <CustomDataGrid rows={users} columns={columns} loading={isLoading} />
    </>
  )
}

export default UserManagement
