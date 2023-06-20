import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { HomeSlider } from '../../home'
import { EditSlider, AddSlider, CustomNoRowsOverlay } from '../components'

import {
  deleteSlider,
  fetchSliders,
  selectAllSliders,
} from '../../../reducers/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CustomDivider } from '../../common'
import { useTranslation } from 'react-i18next'

const SliderManagement = () => {
  const dispatch = useDispatch()
  const sliders = useSelector(selectAllSliders)
  const { t } = useTranslation()
  useEffect(() => {
    dispatch(fetchSliders())
  }, [])

  const columns = useMemo(
    () => [
      { field: 'id', headerName: t('شماره'), width: 90 },

      { field: 'name', headerName: t('نام'), width: 150 },
      { field: 'description', headerName: t('توضیحات'), width: 150 },
      { field: 'url', headerName: t('لینک'), width: 150 },
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
    [sliders, EditSlider, t],
  )
  return (
    <>
      <AddSlider />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={sliders}
          columns={columns}
          components={{
            NoRowsOverlay: () => <CustomNoRowsOverlay />,
          }}
          sx={{
            overflowX: 'scroll',
          }}
        />
      </div>
      <CustomDivider label="پیش نمایش" />
      <HomeSlider sliders={sliders} />
    </>
  )
}

export default SliderManagement
