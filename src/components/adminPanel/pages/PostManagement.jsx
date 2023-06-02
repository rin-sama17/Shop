import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { useDeletePostMutation, useGetPostsQuery } from '../../../api'
import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import { useMemo } from 'react'

const PostManagement = () => {
  const { data = { posts: [] } } = useGetPostsQuery({ prefix: '/admin' })
  const [deletePost] = useDeletePostMutation()
  console.log(data)

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.log(error)
    }
  }

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'شماره', width: 100 },
      { field: 'name', headerName: 'نام پست', width: 150 },
      { field: 'description', headerName: 'مقدمه', width: 200 },
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
            onClick={() => handleDelete(params.id)}
          />,
          <EditPost post={params.row} />,
        ],
      },
    ],
    [handleDelete, data.posts],
  )

  return (
    <>
      <AddPost />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={data.posts} columns={columns} />
      </div>
    </>
  )
}

export default PostManagement
