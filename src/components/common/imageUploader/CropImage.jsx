import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { Slider, Button } from '@mui/material'
import getCroppedImg from './getCroppedImg'
import Grid from '@mui/material/Unstable_Grid2'
const CropImage = ({ img, setChanges, setOpen, aspect }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
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
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
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
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(zoom)}
          sx={{ px: 2 }}
        />
        <Button sx={{ width: 150 }} onClick={showCroppedImage}>
          ثبت تغییرات
        </Button>
      </Grid>
    </Grid>
  )
}

export default CropImage
