import { Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { magazineItems } from '../../constants/magazineItems'
const FooterContent = () => {
  const [newMagazines, setNewMagazines] = useState([])

  useEffect(() => {
    const filtredMagazines = magazineItems.sort(
      (objA, objB) => Number(objA.date) - Number(objB.date),
    )

    setNewMagazines(filtredMagazines.slice(0, 4))
  }, [])
  return (
    <>
      <Grid
        xs={12}
        md={4}
        sx={{ display: 'flex', flexDirection: 'column', px: 3 }}
      >
        <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
          فروشگاه من
        </Typography>
        <Typography variant="caption" color="text.primary">
          فروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال یو
          ای دیزاین شدهروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است که
          با متریال یو ای دیزاین شده استروشگاه من یکلاراول است که با متریال یو
          ای دیزاین شده استروشگاه من یک فروشگاه ساخته شده با ری اکت و لاراول است
          که با متریال یو ای دتریال یو ای دیزاین شده استر
        </Typography>
      </Grid>
      <Grid
        xs={12}
        md={4}
        sx={{ display: 'flex', flexDirection: 'column', px: 3 }}
      >
        <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
          جدیدترین مجله های ما
        </Typography>
        {newMagazines.map((item, index) => (
          <Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
            <Typography variant="subtitle2" color="text.primary">
              {item.title}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ my: 0.5 }}
            >
              شهریور 1401/2/3
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid
        xs={12}
        md={4}
        sx={{ display: 'flex', flexDirection: 'column', px: 3 }}
      >
        <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
          تماس با ما
        </Typography>
        <Typography variant="subtitle2" color="text.primary" sx={{ mb: 1 }}>
          ادرس: ایران-تهران-فروشگاه من
        </Typography>
        <Typography variant="subtitle2" color="text.primary" sx={{ mb: 1 }}>
          شماره تلفن: 021128182812
        </Typography>
      </Grid>
    </>
  )
}
export default FooterContent
