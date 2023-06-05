import {
  CardActionArea,
  Box,
  CardMedia,
  ImageListItem,
  Card,
  Button,
} from '@mui/material'
import { AddAPhoto } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'
import CustomModal from './CustomModal'
import { useRef, useState } from 'react'
import CropImage from './imageUploader/CropImage.jsx'
const ImageUploader = ({ formik, name, color, width, md, aspect }) => {
  const [open, setOpen] = useState(false)

  const setChanges = (changes) => {
    formik.setFieldValue(name, changes)
  }
  const handleFileChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setChanges(reader.result)
        setOpen(true)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <>
      <Grid
        xs={12}
        md={md ? md : 3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box component="div" sx={{ height: 200, width: width ? width : 200 }}>
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
                      : 'textBox.main',
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
      <CustomModal open={open} setOpen={setOpen} lock>
        <CropImage
          img={formik.values[`${name}`]}
          setChanges={setChanges}
          open={open}
          setOpen={setOpen}
          aspect={aspect}
        />
      </CustomModal>
    </>
  )
}

export default ImageUploader
