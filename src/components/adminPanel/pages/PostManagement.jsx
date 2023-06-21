import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deletePost,
  editPost,
  fetchPosts,
  selectAllPosts,
} from '../../../reducers/postSlice'
import { CustomNoRowsOverlay } from '../components'
import { useTranslation } from 'react-i18next'
import ChangeStatus from '../components/ChangeStatus'
import { fetchTags } from '../../../reducers/tagSlice'
import { showCategory } from '../components/ShowCategory'
import { showStatus } from '../components/ShowStatus'
import CustomDataGrid from '../components/CustomDataGrid'

const PostManagement = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
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
        field: 'status',
        headerName: t('وضعیت'),
        width: 90,
        valueGetter: showStatus,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            onClick={() => dispatch(deletePost(params.id))}
          />,
          <EditPost post={params.row} />,
        ],
      },
    ],
    [EditPost, posts, t],
  )

  return (
    <>
      <AddPost />
      <CustomDataGrid rows={posts} columns={columns} />
    </>
  )
}

export default PostManagement
