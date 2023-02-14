import { Button, Modal, Card } from '@mui/material'
import {
  CustomFields,
  CustomIconButton,
  CustomDivider,
  ImageUploader,
} from '../../common'
import { paragraphValidation } from '../../validations/postValidation'
import { useFormik } from 'formik'

import Grid from '@mui/material/Unstable_Grid2'
import { Edit } from '@mui/icons-material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectParagraphById,
  paragraphUpdated,
} from '../../../reducers/postSlice'
import { toast } from 'react-toastify'
const EditParagraph = ({ patagraphId }) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const paragraph = useSelector((state) =>
    selectParagraphById(state, patagraphId),
  )

  const { id, title, body, photo } = paragraph

  const paragraphFields = {
    id,
    title,
    body,
    photo,
  }
  const formik = useFormik({
    initialValues: paragraphFields,
    validationSchema: paragraphValidation,
    onSubmit: (values) => {
      dispatch(paragraphUpdated(values))
      toast.success(`پاراگراف ${values.title} با موفقیت ویرایش شد`)
      setOpen(false)
    },
  })
  return (
    <>
      <CustomIconButton
        title="ویرایش پاراگراف"
        color="info"
        icon={<Edit />}
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(3px)',
        }}
      >
        <Card sx={{ width: '90%', p: 1 }}>
          <CustomDivider label="ویرایش پاراگراف" color="secondary" />
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid
                xs={12}
                md={3}
                sx={{
                  mb: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <ImageUploader
                  formik={formik}
                  name="photo"
                  color="secondary"
                  size={200}
                />
              </Grid>
              <Grid xs={12} md={9}>
                <CustomFields
                  md={4}
                  formik={formik}
                  name="title"
                  sx={{ mb: 2 }}
                  label="عنوان"
                  type="text"
                />

                <CustomFields
                  md={12}
                  formik={formik}
                  name="body"
                  label="توضیحات"
                  type="text"
                  multiline
                  rows={6}
                />
              </Grid>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ mt: 2, color: 'black' }}
              >
                ویرایش پاراگراف
              </Button>
            </Grid>
          </form>
        </Card>
      </Modal>
    </>
  )
}

export default EditParagraph
