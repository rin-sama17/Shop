import { useEffect, useMemo } from 'react'

import {
  EditTag,
  AddTag,
  ConfirmDelete,
  CustomDataGrid,
  NoAccessError,
} from '../components'

import {
  deleteTag,
  fetchTags,
  selectAllTags,
  selectTagDetails,
} from '../../../reducers/tagSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const TagManagement = () => {
  const dispatch = useDispatch()
  const tag = useSelector(selectAllTags)
  const { loading, access } = useSelector(selectTagDetails)
  const isLoading = Boolean(!(tag.length > 0) && loading)

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchTags())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام تگ'), width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <ConfirmDelete item={params.row} itemDelete={deleteTag} />,
          <EditTag tag={params.row} />,
        ],
      },
    ],
    [tag, EditTag, t],
  )

  if (!loading && !access) {
    return <NoAccessError />
  }
  return (
    <>
      <AddTag />
      <CustomDataGrid rows={tag} columns={columns} loading={isLoading} />
    </>
  )
}

export default TagManagement
