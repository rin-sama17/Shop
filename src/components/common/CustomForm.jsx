import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CustomDivider, CustomFields, ImageUploader } from '../common'

const CustomForm = ({
  fields,
  formik,
  label,
  color,
  imageUploader,
  imageUploaderName,
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>
        <CustomDivider label={label} color={color ?? 'primary'} />
        {imageUploader ? (
          <ImageUploader
            formik={formik}
            name={imageUploaderName}
            color={color ?? 'primary'}
          />
        ) : null}
        <Grid xs={12} md={9}>
          <Grid container spacing={2} sx={{ direction: 'ltr' }}>
            {fields.map((field, index) => (
              <CustomFields {...field} key={index} />
            ))}
          </Grid>
        </Grid>
        <Button
          fullWidth
          type="submit"
          color={color ?? 'primary'}
          variant="contained"
          sx={{ mt: 2, color: 'black' }}
        >
          ارسال
        </Button>
      </Grid>
    </form>
  )
}

export default CustomForm
