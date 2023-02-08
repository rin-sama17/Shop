import {
  CardActionArea,
  Box,
  CardMedia,
  ImageListItem,
  Card,
} from '@mui/material'
import { AddAPhoto } from '@mui/icons-material'
const ImageUploader = ({ formik, name, color, size }) => {
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
    <Box component="div" sx={{ height: size, width: size, mb: 2 }}>
      <ImageListItem>
        {formik.values[`${name}`] ? (
          <CardMedia
            component="img"
            image={formik.values[`${name}`]}
            alt=""
            sx={{ height: size, width: size }}
          />
        ) : (
          <Card sx={{ height: size, width: size }} />
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
  )
}

export default ImageUploader
