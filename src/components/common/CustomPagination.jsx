'use client'

import { useState, useMemo, useEffect } from 'react'
import { Pagination, Box } from '@mui/material'

const CustomPagination = ({ data, setData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = Math.ceil(data.length / 12)

  const currentTableData = useMemo(() => {
    const firstPage = (currentPage - 1) * 12
    const lastPage = firstPage + 12
    return data.slice(firstPage, lastPage)
  }, [currentPage, data])

  useEffect(() => {
    setData(currentTableData)
  }, [currentTableData])

  const handleChange = (event, value) => {
    setCurrentPage(value)
  }
  return (
    <Box sx={{ direction: 'ltr' }}>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={handleChange}
        color="secondary"
      />
    </Box>
  )
}

export default CustomPagination
