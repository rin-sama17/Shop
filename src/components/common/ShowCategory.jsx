import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ShowCategory = ({ category, tags }) => {
  const splitedTags = tags && tags.split('/')
  return (
    <Box>
      <Typography
        color="text.secondary"
        variant="subtitle2"
        sx={{ mr: 1 }}
        gutterBottom
      >
        دسته بندی:
        <Button
          component={Link}
          to={`/search/${category}`}
          color="secondary"
          sx={{ ml: 1 }}
          size="small"
        >
          {category}
        </Button>
      </Typography>
      <Typography
        color="text.secondary"
        variant="caption"
        sx={{ mr: 1, display: 'flex' }}
        gutterBottom
      >
        تگ ها:
        {splitedTags.map((tag, index) => (
          <Box key={index}>
            <Typography
              component={Link}
              to={`/search/${tag}`}
              color="primary"
              variant="caption"
              sx={{ mx: 0.5 }}
            >
              {tag}
            </Typography>
            /
          </Box>
        ))}
      </Typography>
    </Box>
  )
}

export default ShowCategory
