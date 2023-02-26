import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Card, Divider, Stack, Button } from '@mui/material'
import { CustomDivider, CustomFields } from '../../common'
import { ShowTime } from '../../common'
import { useFormik } from 'formik'
import { commentValidation } from '../../validations/commentValidation.js'
import { useAddNewCommentMutation, useGetCommentsQuery } from '../../../api'
import { nanoid } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { createSelector } from '@mui/x-data-grid/internals'

const Comment = ({ comment }) => {
  return (
    <Card sx={{ display: 'flex', p: 4, mb: 3 }}>
      <Grid container sx={{ width: 1 }}>
        <Grid
          md={1}
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
          }}
        ></Grid>
        <Grid
          xs={12}
          md={11}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: {
              xs: 'center',
              md: 'left',
            },
            px: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ ml: 1, width: 1 }}
          >
            <Typography variant="body1" color="primary" gutterBottom>
              {comment.name === '' ? 'نویسنده ناشناس' : comment.name}
            </Typography>
            <ShowTime timestamp={comment.date} />
          </Stack>

          <Typography variant="body2" color="text.primary">
            {comment.body}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

const ProductComments = ({ productId }) => {
  const [addNewComment] = useAddNewCommentMutation()

  const selectProductComments = useMemo(() => {
    const emptyArray = []

    return createSelector(
      (res) => res.data,
      (res, productId) => productId,
      (data, productId) => {
        const acceptedComments = data?.filter(
          (comment) => comment.isShow === true,
        )
        return (
          acceptedComments?.filter(
            (comment) => comment.productId === productId,
          ) ?? emptyArray
        )
      },
    )
  }, [])

  const { comments } = useGetCommentsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      comments: selectProductComments(result, productId),
    }),
  })

  const handleAddNewComment = async (values) => {
    const { name, body } = values
    try {
      await addNewComment({
        id: nanoid(),
        date: new Date().toISOString(),
        name,
        body,
        isShow: false,
        productId,
      })
      toast.success(`نظر شما با پس از برسی کارشناسان اضافه خواهد شد`)
    } catch (error) {
      console.log(error.massage)
      toast.error('مشکلی پیش امده لطفا بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { name: '', body: '' },
    validationSchema: commentValidation,
    onSubmit: (values, { resetForm }) => {
      handleAddNewComment(values)
      resetForm()
    },
  })
  return (
    <>
      <CustomDivider label="نظر جدید" color="success" />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <CustomFields
            formik={formik}
            name="name"
            label="نام شما (اختیاری)"
            md={6}
          />
          <CustomFields
            formik={formik}
            name="body"
            label="نظر شما"
            multiline
            rows={6}
          />
          <Button fullWidth size="large" type="submit" sx={{ mb: 4 }}>
            ثبت نظر
          </Button>
        </Grid>
      </form>

      <CustomDivider label="نظر ها" color="warning" />
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))
      ) : (
        <Card
          sx={{
            display: 'flex',
            p: 4,
            justifyContent: 'center',
          }}
        >
          <Typography>کامنتی برای نمایش وجود ندارد</Typography>
        </Card>
      )}
    </>
  )
}
export default ProductComments
