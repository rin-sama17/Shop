import { notFound } from '../../../assets'
import { Box, Typography } from '@mui/material'

export default function CustomNoRowsOverlay() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <img
        src={notFound}
        alt="not found"
        style={{ height: '200px', width: '200px' }}
      />
      <Typography sx={{ mt: 1 }} color="text.secondary">
        داده ای برای نمایش وجود ندارد
      </Typography>
    </Box>
  )
}
