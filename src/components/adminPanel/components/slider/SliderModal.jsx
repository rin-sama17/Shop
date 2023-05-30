import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import { CustomDivider, CustomModal } from '../../../common'
import { useGetSlidersQuery } from '../../../../api'
import { EditSlider, Slider } from '..'

const SliderModal = () => {
  const [open, setOpen] = useState(false)
  const [sliderId, setSliderId] = useState('')

  const { data: sliders = [], isSuccess } = useGetSlidersQuery({
    prefix: '/admin',
  })

  if (!isSuccess) {
    return
  }
  return (
    <>
      <CustomDivider label="مدیریت اسلاید ها" />

      <Grid container spacing={2} sx={{ width: 1 }}>
        {sliders.length > 0 &&
          sliders.map((item, index) => (
            <Slider
              sliderId={item.id}
              setSliderId={setSliderId}
              setOpen={setOpen}
              key={index}
            />
          ))}
      </Grid>

      <CustomModal open={open} setOpen={setOpen}>
        <EditSlider sliderId={sliderId} setOpen={setOpen} />
      </CustomModal>
    </>
  )
}

export default SliderModal
