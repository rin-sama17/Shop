import { useMediaQuery, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectLang } from '../../../reducers/langSlice'
import CustomNoRowsOverlay from './CustomNoRowsOverlay'

const CustomDataGrid = ({ rows, columns, loading = false }) => {
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  const lang = useSelector(selectLang)

  const isRtl = Boolean(downMd && lang !== 'en')
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        components={{
          NoRowsOverlay: () => <CustomNoRowsOverlay />,
        }}
        sx={{
          direction: isRtl ? 'rtl' : 'ltr',
          overflowX: 'scroll',
        }}
      />
    </div>
  )
}

export default CustomDataGrid
