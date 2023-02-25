import { Button } from '@mui/material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import {
  useDeleteCommentMutation,
  useGetCommentQuery,
  useGetCommentsQuery,
  useEditCommentMutation,
} from '../../../api'
import { Delete } from '@mui/icons-material'
import { toast } from 'react-toastify'
const CommentView = (props) => {
  const { hasFocus, value } = props

  const buttonElement = useRef(null)
  const rippleRef = useRef(null)

  const [updateComment] = useEditCommentMutation()
  const { data: comment, isSuccess } = useGetCommentQuery(value)

  const handletCommentView = async () => {
    console.log(value)
    if (isSuccess) {
      const updatedComment = { ...comment, isShow: true }
      try {
        await updateComment(updatedComment).unwrap()
      } catch (error) {
        toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
        console.error('error: ', error)
      }
    }
  }

  useLayoutEffect(() => {
    if (hasFocus) {
      const input = buttonElement.current?.querySelector('input')
      input?.focus()
      handletCommentView()
    } else if (rippleRef.current) {
      rippleRef.current.stop({})
    }
  }, [hasFocus, isSuccess])

  return (
    <strong>
      <Button
        ref={buttonElement}
        touchRippleRef={rippleRef}
        style={{ marginLeft: 16 }}
        tabIndex={hasFocus ? 0 : -1}
        disabled={comment.isShow}
        onKeyDown={(event) => {
          if (event.key === ' ') {
            event.stopPropagation()
          }
        }}
      >
        نمایش
      </Button>
    </strong>
  )
}

const CommentManagement = () => {
  const { data: comments = [] } = useGetCommentsQuery()
  const [deleteComment] = useDeleteCommentMutation()

  const handleCommentDelete = async (commentId) => {
    console.log(commentId)
    try {
      await deleteComment(commentId).unwrap()
    } catch (error) {
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
      console.error('error: ', error)
    }
  }

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ای دی', width: 100 },
      { field: 'name', headerName: 'نام کاربر', width: 100 },
      { field: 'body', headerName: 'کامنت', width: 150 },
      { field: 'isShow', headerName: 'نمایش', type: 'boolean', width: 100 },

      {
        field: 'edit',
        headerName: 'تغییر وضعیت',
        sortable: false,
        width: 100,
        valueGetter: (params) => params.row.id,
        renderCell: CommentView,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 40,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => handleCommentDelete(params.id)}
          />,
        ],
      },
    ],
    [comments, handleCommentDelete, CommentView],
  )
  return (
    <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
      <DataGrid rows={comments} columns={columns} />
    </div>
  )
}
export default CommentManagement
