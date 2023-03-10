import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { descriptionValidation } from '../../validations/descriptionValidation'
import { useEditDescriptionMutation } from '../../../api'
import { CustomDivider, CustomFields } from '../../common'

const EditDescription = ({ description }) => {
  const [updateDescription] = useEditDescriptionMutation()

  const handleAddNewDiscount = async (values) => {
    try {
      await updateDescription({ ...values })
      toast.success('توضیحات با موفقیت ویرایش شدند')
    } catch (error) {
      console.log(error.massage)
      toast.error('مشکلی پیش امده بعدا دوباره امتحان کنید')
    }
  }

  const formik = useFormik({
    initialValues: { ...description },
    validationSchema: descriptionValidation,
    onSubmit: (values) => {
      handleAddNewDiscount(values)
    },
  })
  return (
    <>
      <CustomDivider label="توضیحات فروشگاه" color="success" />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <CustomFields
            formik={formik}
            label="درباره ما"
            name="aboutUs"
            multiline
          />
          <CustomFields
            formik={formik}
            label="تماس با ما"
            name="contactUs"
            multiline
          />

          <Button fullWidth type="submit" color="success">
            اعمال تغییرات
          </Button>
        </Grid>
      </form>
    </>
  )
}

export default EditDescription
