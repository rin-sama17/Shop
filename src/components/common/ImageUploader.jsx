import {
  CardActionArea,
  Box,
  CardMedia,
  ImageListItem,
  Card,
} from '@mui/material'
import { AddAPhoto } from '@mui/icons-material'

import Grid from '@mui/material/Unstable_Grid2'
const ImageUploader = ({ formik, name, color, width, md }) => {
  const handleFileChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        formik.setFieldValue(name, reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <Grid
      xs={12}
      md={md ? md : 3}
      sx={{
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="div"
        sx={{ height: 200, width: width ? width : 200, mb: 2 }}
      >
        <ImageListItem>
          {formik.values[`${name}`] ? (
            <CardMedia
              component="img"
              image={formik.values[`${name}`]}
              alt=""
              sx={{ height: 200, width: width ? width : 200 }}
            />
          ) : (
            <Card sx={{ height: 200, width: width ? width : 200 }} />
          )}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              width: 1,
              height: 1,
              bgcolor: 'bgBlur.main',
            }}
          >
            <CardActionArea
              component="label"
              sx={{
                color:
                  formik.touched[`${name}`] && formik.errors[`${name}`]
                    ? 'error.main'
                    : `${color}.main`,
                height: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'bgblur',
              }}
            >
              <input
                accept="image/*"
                hidden
                type="file"
                name={name}
                onChange={handleFileChange}
              />
              <AddAPhoto />
            </CardActionArea>
          </Box>
        </ImageListItem>
      </Box>
    </Grid>
  )
}

export default ImageUploader
