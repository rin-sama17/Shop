import { parseISO, formatDistanceToNow } from 'date-fns-jalali'
import { Box, Typography } from '@mui/material'

const ShowTime = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const time = formatDistanceToNow(date)
    timeAgo = `${time} قبل`
  }

  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="subtitle2" color="text.secondary">
        {timeAgo}
      </Typography>{' '}
    </Box>
  )
}

export default ShowTime
