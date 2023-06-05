import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { Slider, Button } from '@mui/material'
import getCroppedImg from './getCroppedImg'
import Grid from '@mui/material/Unstable_Grid2'
const CropImage = ({ img, setChanges, setOpen, aspect }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      var reader = new FileReader()
      reader.onloadend = function () {
        callback(reader.result)
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  }

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(img, croppedAreaPixels, rotation)
      toDataUrl(croppedImage, function (myBase64) {
        setChanges(myBase64)
        setOpen(false)
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{ minHeight: '70vh', position: 'relative' }}
    >
      <Grid xs={12}>
        <Cropper
          image={img}
          crop={crop}
          rotation={rotation}
          aspect={aspect}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
        />
      </Grid>
      <Grid
        xs={12}
        sx={{
          display: 'flex',
          width: 1,
          position: 'absolute',
          bottom: 2,
          bgcolor: 'bgcolor.dark',
          borderRadius: '17px   17px 0 0',
        }}
      >
        <Button
          fullWidth
          onClick={showCroppedImage}
          variant="contained"
          sx={{ bgcolor: 'btnSubmit.main', color: 'btnSubmit.light' }}
        >
          ثبت تغییرات
        </Button>
      </Grid>
    </Grid>
  )
}

export default CropImage
