import { useState, useCallback, useEffect } from 'react'
import Cropper from 'react-easy-crop'
import { Slider, Button } from '@mui/material'
import getCroppedImg from './getCroppedImg'
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'react-i18next'
const CropImage = ({ img, setChanges, setOpen, setPhotoURL, aspect }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const { t } = useTranslation()

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const cropImage = async () => {
    try {
      const { file, url } = await getCroppedImg(
        img,
        croppedAreaPixels,
        rotation,
      )
      setPhotoURL(url)

      setChanges(file)
      setOpen(false)
    } catch (error) {
      console.log(error)
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
          onClick={cropImage}
          variant="contained"
          sx={{ bgcolor: 'btnSubmit.main', color: 'btnSubmit.light' }}
        >
          {t('ثبت تغییرات')}
        </Button>
      </Grid>
    </Grid>
  )
}

export default CropImage
