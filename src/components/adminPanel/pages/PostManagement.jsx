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
      { field: 'id', headerName: t('شماره'), width: 100 },
      { field: 'name', headerName: t('نام پست'), width: 150 },
      { field: 'summary', headerName: t('مقدمه'), width: 200 },
      { field: 'category_id', headerName: t('دسته بندی'), width: 100 },
      {
        field: 'actions',
        type: 'actions',
        width: 110,
        getActions: (params) => [
          <ChangeStatus item={params.row} editItem={editPost} />,
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
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={posts}
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

export default PostManagement
