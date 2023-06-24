import { useEffect, useMemo } from 'react'

import {
  EditAgency,
  AddAgency,
  ConfirmDelete,
  CustomDataGrid,
  NoAccessError,
} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAgency,
  fetchAgencies,
  selectAgencyDetails,
  selectAllAgencies,
} from '../../../reducers/agencySlice'
import { useTranslation } from 'react-i18next'

const AgencyManagement = () => {
  const dispatch = useDispatch()
  const agencies = useSelector(selectAllAgencies)
  const { loading, access } = useSelector(selectAgencyDetails)
  const isLoading = Boolean(!(agencies.length > 0) && loading)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchAgencies())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام'), width: 100 },
      { field: 'address', headerName: t('ادرس'), width: 150 },
      { field: 'phone', headerName: t('شماره تلفن'), width: 150 },
      { field: 'email', headerName: t('ایمیل'), width: 200 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <ConfirmDelete item={params.row} itemDelete={deleteAgency} />,
          <EditAgency agency={params.row} />,
        ],
      },
    ],
    [agencies, EditAgency, t],
  )

  if (!loading && !access) {
    return <NoAccessError />
  }

  return (
    <>
      <AddAgency />
      <CustomDataGrid rows={agencies} columns={columns} loading={isLoading} />
    </>
  )
}

export default AgencyManagement
