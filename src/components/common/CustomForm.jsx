import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomDivider, CustomFields, ImageUploader } from '.'

const CustomForm = ({
  fields,
  formik,
  label,
  color = 'secondary',
  extraFields,
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
              <CustomFields {...field} label={t(field.label)} key={index} />
            ))}
            {extraFields?.map((field, index) => (
              <CustomFields {...field} key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default CustomForm
