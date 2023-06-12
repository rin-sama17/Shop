import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { HomeSlider } from '../../home'
import { EditSlider, AddSlider } from '../components'

import {
  deleteSlider,
  fetchSliders,
  selectAllSliders,
} from '../../../reducers/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CustomDivider } from '../../common'

const SliderManagement = () => {
  const dispatch = useDispatch()
  const sliders = useSelector(selectAllSliders)
  useEffect(() => {
    dispatch(fetchSliders())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام', width: 150 },
      { field: 'description', headerName: 'توضیحات', width: 150 },
      { field: 'url', headerName: 'لینک', width: 150 },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<Delete />}
            sx={{ color: 'tomato' }}
            label="حذف"
            onClick={() => dispatch(deleteSlider(params.id))}
          />,
          <EditSlider slider={params.row} />,
        ],
      },
    ],
    [sliders, EditSlider],
  )
  return (
    <>
      <AddSlider />
      <div style={{ height: 600, width: '100%', direction: 'rtl' }}>
        <DataGrid rows={sliders} columns={columns} />
      </div>
      <CustomDivider label="پیش نمایش" />
      <HomeSlider />
    </>
  )
}

export default SliderManagement
