import Grid from '@mui/material/Unstable_Grid2'
import { CustomDivider, CustomFields, ImageUploader } from '.'

const CustomForm = ({
  fields,
  formik,
  label,
  imageUploader,
  imageUploaderName,
  imageUploaderProps,
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomDivider label={label} />
        {imageUploader ? (
          <ImageUploader
            formik={formik}
            name={imageUploaderName}
            color="secondary"
            {...imageUploaderProps}
          />
        ) : null}
        <Grid xs={12} md={imageUploader ? 9 : 12}>
          <Grid container spacing={2} sx={{ direction: 'ltr' }}>
            {fields.map((field, index) => (
              <CustomFields {...field} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default CustomForm
