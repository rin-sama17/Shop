import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/material'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomDivider, CustomFields, ImageUploader } from '.'

const CustomForm = ({
  fields,
  formik,
  label,
  extraFields,
  additionalFields,
  imageUploader,
  imageUploaderName,
  imageUploaderProps,
}) => {
  const { t } = useTranslation()
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        direction: 'ltr !important',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        spacing={2}
      >
        <Box sx={{ width: 1 }}>
          <CustomDivider label={label} />
        </Box>
        {imageUploader ? (
          <ImageUploader
            formik={formik}
            name={imageUploaderName}
            color="secondary"
            {...imageUploaderProps}
          />
        ) : null}
        <Grid xs={12} md={imageUploader ? 9 : 12}>
          <Grid container sx={{ direction: 'ltr' }}>
            {fields?.map((field, index) => (
              <Fragment key={index}>
                {field.display && field.display === 'none' ? null : (
                  <CustomFields {...field} label={t(field.label)} key={index} />
                )}
              </Fragment>
            ))}
            {extraFields?.map((field, index) => (
              <CustomFields {...field} key={index} />
            ))}
          </Grid>
        </Grid>
        {additionalFields?.map((field, index) => (
          <CustomFields {...field} key={index} />
        ))}
      </Grid>
    </form>
  )
}

export default CustomForm
