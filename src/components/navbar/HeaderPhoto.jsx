import { Box, CardMedia } from '@mui/material'
import { createSelector } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useGetSlidersQuery } from '../../api'

const HeaderPhoto = () => {
  const selectHeaderPhoto = useMemo(() => {
    return createSelector(
      (res) => res.data?.data.sliders,
      (data) => data?.find((slider) => slider.type == 3) ?? null,
    )
  }, [])

  const { headerPhoto, isSuccess } = useGetSlidersQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      headerPhoto: selectHeaderPhoto(res),
    }),
  })
  console.log(headerPhoto)
  if (!isSuccess || !headerPhoto) {
    return
  }

  return (
    <Box
      sx={{
        width: 1,
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}
    >
      <CardMedia
        component="img"
        image={`http://localhost:8000/${headerPhoto.image}`}
        sx={{
          height: { xs: 25, sm: 40, md: 55 },
        }}
        alt={headerPhoto.name}
      />
    </Box>
  )
}

export default HeaderPhoto
