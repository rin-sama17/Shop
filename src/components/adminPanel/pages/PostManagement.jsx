import { useRef, useLayoutEffect } from 'react'
import { useDeletePostMutation, useGetPostsQuery } from '../../../api'
import { toast } from 'react-toastify'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, Edit } from '@mui/icons-material'

const PostManagement = () => {
  const { data: posts = [] } = useGetPostsQuery()
  const [deletePost] = useDeletePostMutation()

  const handlePostDelete = async (postId) => {
    try {
      await deletePost(postId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }

  const columns = [
    { field: 'id', headerName: 'ای دی', width: 100 },
    { field: 'heading', headerName: 'نام پست', width: 150 },
    { field: 'introduction', headerName: 'مقدمه', width: 200 },
    { field: 'category', headerName: 'دسته بندی', width: 100 },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Delete />}
          sx={{ color: 'tomato' }}
          label="حذف"
          onClick={() => handlePostDelete(params.id)}
        />,
        <GridActionsCellItem
          icon={<Edit />}
          color="info"
          label="ویرایش"
          component={Link}
          to={`/editPost/${params.id}`}
        />,
      ],
    },
  ]

  return (
    <>
      <Button component={Link} to="/addPost" sx={{ m: 2 }}>
        ساخت پست جدید
      </Button>
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={posts} columns={columns} />
      </div>
    </>
  )
}

export default PostManagement
