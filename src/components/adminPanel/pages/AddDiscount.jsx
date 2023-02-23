import { Modal, Card, Button } from '@mui/material'
import { useState } from 'react'

import { CustomDivider, CustomFields } from '../../common'
import { useFormik } from 'formik'
import { discountValidation } from '../../validations/discountValidation.js'

import Grid from '@mui/material/Unstable_Grid2'
import { useGetDiscountsQuery, useAddNewDiscountMutation } from '../../../api'
const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Titania',
  'Triton',
  'Umbriel',
]
const AddDiscount = () => {
  const [open, setOpen] = useState(false)

  const [addNewDiscount] = useAddNewDiscountMutation()

  const handleAddNewDiscount = async (values) => {
    try {
      const { name, discount, category } = values
      await addNewDiscount({
        name,
        discount,
        category,
      })
      setOpen(false)
    } catch (error) {
      console.log(error.massage)
    }
  }

  const formik = useFormik({
    initialValues: { name: '', discount: '', category: '' },
    validationSchema: discountValidation,
    onSubmit: (values) => {
      handleAddNewDiscount(values)
    },
  })
  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ m: 2 }}>
        ساخت تخفیف جدید
      </Button>
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
        <Card sx={{ width: '90%', p: 3 }}>
          <CustomDivider label="تخفیف جدید" color="error" />
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <CustomFields formik={formik} label="نام" name="name" md={7} />
              <CustomFields
                formik={formik}
                label="تخفیف(به درصد)"
                name="discount"
                type="number"
                md={5}
                helperText={
                  formik.errors.discount ? formik.errors.discount : null
                }
              />
              <CustomFields
                formik={formik}
                customLabel="دسته بندی"
                name="category"
                md={12}
                select
                selectOptions={options}
              />
              <Button fullWidth type="submit" sx={{ color: 'tomato' }}>
                افزودن تخفیف
              </Button>
            </Grid>
          </form>
        </Card>
      </Modal>
    </>
  )
}

export default AddDiscount
