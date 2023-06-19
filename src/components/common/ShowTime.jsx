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
    <Box>
      <Typography variant="caption" color="text.secondary">
        {timeAgo}
      </Typography>
    </Box>
  )
}

export default ShowTime
