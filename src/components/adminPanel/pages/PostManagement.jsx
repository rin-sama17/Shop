import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deletePost,
  editPost,
  fetchPosts,
  selectAllPosts,
  selectPostDetails,
} from '../../../reducers/postSlice'
import { ConfirmDelete } from '../components'
import { useTranslation } from 'react-i18next'
import { fetchTags } from '../../../reducers/tagSlice'
import { showCategory } from '../components/ShowCategory'
import { showStatus } from '../components/ShowStatus'

import CustomDataGrid from '../components/CustomDataGrid'
import NoAccessError from '../components/NoAccessError'

const PostManagement = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const { loading, access } = useSelector(selectPostDetails)
  const isLoading = Boolean(!(posts.length > 0) && loading)

  const { t } = useTranslation()
  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },
      { field: 'name', headerName: t('نام پست'), width: 150 },
      { field: 'summary', headerName: t('مقدمه'), width: 200 },
      {
        field: 'category_id',
        headerName: t('دسته بندی'),
        width: 100,
        valueGetter: showCategory,
      },
      {
        type: 'actions',
        align: 'center',
        headerName: t('نمایش'),
        width: 80,
        editable: false,
        getActions: (params) => showStatus(params, editPost),
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <ConfirmDelete item={params.row} itemDelete={deletePost} />,
          <EditPost post={params.row} />,
        ],
      },
    ],
    [EditPost, posts, t],
  )

  if (!loading && !access) {
    return <NoAccessError />
  }

  return (
    <>
      <AddPost />
      <CustomDataGrid rows={posts} columns={columns} loading={isLoading} />
    </>
  )
}

export default PostManagement
