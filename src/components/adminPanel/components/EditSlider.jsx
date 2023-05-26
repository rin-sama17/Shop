import { toast } from 'react-toastify'
import { Button } from '@mui/material'

import { SliderLoading } from '../../loading'
import {
  useDeleteSliderMutation,
  useGetSliderQuery,
} from '../../../api/adminApi'
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
      <>
        <EditSliderFields slider={slider} setOpen={setOpen} />
        <Button
          fullWidth
          color="error"
          variant="contained"
          size="large"
          onClick={handleDeleteSlider}
          sx={{ mt: 1 }}
        >
          حذف
        </Button>
      </>
    )
  }
  return content
}

export default EditSlider
