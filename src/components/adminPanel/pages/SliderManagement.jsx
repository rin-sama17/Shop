import { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { Delete } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'

import { HomeSlider } from '../../home'
import {
  EditSlider,
  AddSlider,
  CustomNoRowsOverlay,
  ConfirmDelete,
} from '../components'

import {
  deleteSlider,
  fetchSliders,
  selectAllSliders,
  selectSliderDetails,
} from '../../../reducers/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CustomDivider } from '../../common'
import { useTranslation } from 'react-i18next'

import CustomDataGrid from '../components/CustomDataGrid'
import NoAccessError from '../components/NoAccessError'

const SliderManagement = () => {
  const dispatch = useDispatch()
  const sliders = useSelector(selectAllSliders)
  const { loading, access } = useSelector(selectSliderDetails)
  const isLoading = Boolean(!(sliders.length > 0) && loading)
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
          <ConfirmDelete item={params.row} itemDelete={deleteSlider} />,
          <EditSlider slider={params.row} />,
        ],
      },
    ],
    [sliders, EditSlider, t],
  )

  if (!loading && !access) {
    return <NoAccessError />
  }
  return (
    <>
      <AddSlider />
      <CustomDataGrid rows={sliders} columns={columns} loading={isLoading} />
      {sliders.length > 0 && (
        <>
          <CustomDivider label="پیش نمایش" />
          <HomeSlider sliders={sliders} />
        </>
      )}
    </>
  )
}

export default SliderManagement
