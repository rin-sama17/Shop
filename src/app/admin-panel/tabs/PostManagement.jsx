'use client'

import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import AddPost from '../components/AddPost'
import EditPost from '../components/EditPost'
import { useMemo } from 'react'
import { getPosts } from '@/api'

const PostManagement = () => {
  const data = getPosts('/admin')
  const deletePost = async (postId) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/posts/delete/${postId}`
      const res = await fetch(url, {
        method: 'DELETE',
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
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
            onClick={() => deletePost(params.id)}
          />,
          <EditPost post={params.row} />,
        ],
      },
    ],
    [EditPost, data.posts],
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
