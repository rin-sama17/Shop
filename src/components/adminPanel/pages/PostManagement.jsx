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
  fetchPosts,
  selectAllPosts,
} from '../../../reducers/postSlice'

const PostManagement = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'شماره', width: 100 },
      { field: 'name', headerName: 'نام پست', width: 150 },
      { field: 'summary', headerName: 'مقدمه', width: 200 },
      { field: 'category_id', headerName: 'دسته بندی', width: 100 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => dispatch(deletePost(params.id))}
          />,
          <EditPost post={params.row} />,
        ],
      },
    ],
    [EditPost, posts],
  )

  return (
    <>
      <AddPost />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={posts} columns={columns} />
      </div>
    </>
  )
}

export default PostManagement
