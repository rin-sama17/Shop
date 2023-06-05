'use client'

import { Button, Box } from '@mui/material'

import { EditSliderFields } from '.'
import { deleteSlider, getSlider } from '@/api'

const EditSlider = ({ sliderId, setOpen }) => {
  const { slider } = getSlider(sliderId, '/admin')
  const deleteSlider = async (sliderId) => {
    'use server'

    try {
      const url = `http://127.0.0.1:8000/api/admin/sliders/delete/${sliderId}`
      const res = await fetch(url, {
        method: 'DELETE',
      })

      const jsonResponse = await res.json()
      const status = res.status

      console.log(status)
      console.log(jsonResponse)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <EditSliderFields slider={slider} setOpen={setOpen} />
      <Button
        fullWidth
        color="error"
        variant="contained"
        size="small"
        onClick={() => deleteSlider(sliderId)}
        sx={{ mt: 1, width: '75%' }}
      >
        حذف
      </Button>
    </Box>
  )
}

export default EditSlider
