import { Box, CardMedia } from '@mui/material'
import { createSelector } from '@reduxjs/toolkit'
import { useMemo, useEffect } from 'react'
import { useGetSlidersQuery } from '../../api'
import { useSelector } from 'react-redux'
import { selectHeaderPhoto } from '../../reducers/sliderSlice'

const HeaderPhoto = () => {
  const canRefetch = useSelector(selectHeaderPhoto)
  const selectHeader = useMemo(() => {
    return createSelector(
      (res) => res.data?.data.sliders,
      (data) => data?.find((slider) => slider.type == 3) ?? null,
    )
  }, [canRefetch])

  const { headerPhoto, isSuccess, refetch } = useGetSlidersQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      headerPhoto: selectHeader(res),
    }),
  })

  useEffect(() => {
    if (canRefetch !== headerPhoto) {
      refetch()
    }
  }, [canRefetch])

  if (!isSuccess || !headerPhoto) {
    return
  }

  return (
    <Box
      component="a"
      href={headerPhoto.url}
      target="_blank"
      sx={{
        width: 1,
      }}
    >
      <CardMedia
        component="img"
        image={`https://api.labkhand-carpet.ir/${headerPhoto.image}`}
        sx={{
          height: { xs: 25, sm: 40, md: 55 },
        }}
        alt={headerPhoto.name}
      />
    </Box>
  )
}

export default HeaderPhoto
