import { getCategory } from '@/api'
import { Typography, Box, Button } from '@mui/material'
import Link from 'next/link'

const ShowCategory = async ({ categoryId, tags }) => {
  const { category } = await getCategory(categoryId, '/admin')
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
          to={`/search/${categoryId};name:${category.name}`}
          color="secondary"
          sx={{ ml: 1 }}
          size="small"
        >
          {category.name}
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
              to={`/search/${tag.replace(/^\s+|\s+$/g, '')}`}
              color="secondary"
              variant="caption"
              sx={{ mx: 0.5 }}
            >
              {tag.replace(/^\s+|\s+$/g, '')}
            </Typography>
            /
          </Box>
        ))}
      </Typography>
    </Box>
  )
}
export default ShowCategory
