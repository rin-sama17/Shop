import { toast } from 'react-toastify'
import { Button, Box } from '@mui/material'

import { SliderLoading } from '../../loading'
import {
  useDeleteSliderMutation,
  useGetSliderQuery,
} from '../../../api'
import { EditSliderFields } from '.'

const EditSlider = ({ sliderId, setOpen }) => {
  const { data: slider, isLoading, isSuccess } = useGetSliderQuery(sliderId)
  const [deleteSlider] = useDeleteSliderMutation()

  const handleDeleteSlider = async () => {
    try {
      await deleteSlider(slider.id).unwrap()
      toast.success(`اسلایدر ${slider.title} با موفقیت حذف شد`)
      setOpen(false)
    } catch (error) {
      console.log(error.massage)
    }
  }

  let content
  if (isLoading) {
    content = <SliderLoading />
  } else if (isSuccess) {
    content = (
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <EditSliderFields slider={slider} setOpen={setOpen} />
        <Button
          fullWidth
          color="error"
          variant="contained"
          size="small"
          onClick={handleDeleteSlider}
          sx={{ mt: 1, width: '75%' }}
        >
          حذف
        </Button>
      </Box>
    )
  }
  return content
}

export default EditSlider
