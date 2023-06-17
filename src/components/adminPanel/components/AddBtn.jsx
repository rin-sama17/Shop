import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const AddBtn = ({ setOpen, title }) => {
  const { t } = useTranslation()
  return (
    <Button
      onClick={() => setOpen(true)}
      variant="contained"
      sx={{ m: 2 }}
      color="secondary"
    >
      {t(title)}
    </Button>
  )
}

export default AddBtn
