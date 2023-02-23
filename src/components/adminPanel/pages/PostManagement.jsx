import { useRef, useLayoutEffect } from 'react'
import { useDeletePostMutation, useGetPostsQuery } from '../../../api'
import { toast } from 'react-toastify'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const DeletePost = (props) => {
  const { hasFocus, value } = props
  const buttonElement = useRef(null)
  const rippleRef = useRef(null)
  const [deletePost] = useDeletePostMutation()

  const handlePostDelete = async (postId) => {
    try {
      await deletePost(postId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }
  useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector('input')
      input?.focus()
      handlePostDelete(value)
    } else if (rippleRef.current) {
      rippleRef.current.stop({})
    }
  }, [hasFocus])

  return (
    <strong>
      <Button
        color="error"
        ref={buttonElement}
        touchRippleRef={rippleRef}
        style={{ marginLeft: 16 }}
        tabIndex={hasFocus ? 0 : -1}
        onKeyDown={(event) => {
          if (event.key === ' ') {
            event.stopPropagation()
          }
        }}
      >
        حذف
      </Button>
    </strong>
  )
}
const PostManagement = () => {
  const { data: posts = [] } = useGetPostsQuery()

  const columns = [
    { field: 'id', headerName: 'ای دی', width: 100 },
    { field: 'heading', headerName: 'نام پست', width: 200 },
    { field: 'introduction', headerName: 'مقدمه', width: 150 },
    { field: 'category', headerName: 'دسته بندی', width: 150 },
    {
      field: 'edit',
      headerName: 'ویرایش',
      sortable: false,
      width: 150,
      valueGetter: (params) => params.row.id,
      renderCell: ({ value }) => (
        <Button component={Link} to={`/editPost/${value}`}>
          ویرایش
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: 'حذف',
      sortable: false,
      width: 150,
      valueGetter: (params) => params.row.id,
      renderCell: DeletePost,
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
