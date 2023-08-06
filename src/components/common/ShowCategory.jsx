import { Typography, Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCategoryById } from '../../reducers/categorySlice'

const ShowCategory = ({ categoryId, tags, isProduct }) => {
  const { t } = useTranslation()
  const category = useSelector((state) => selectCategoryById(state, categoryId))

  return (
    <Box>
      {category && (
        <Typography
          color="text.secondary"
          variant="subtitle2"
          sx={{ mr: 1 }}
          gutterBottom
        >
          {t('دسته بندی')}:
          <Button
            component={Link}
            to={`/products`}
            state={{ category: category.id }}
            color="secondary"
            sx={{ ml: 1 }}
            size="small"
          >
            {category.name}
          </Button>
        </Typography>
      )}
      {tags && tags.length > 0 && (
        <Typography
          color="text.secondary"
          variant="caption"
          sx={{ mr: 1, display: 'flex' }}
          gutterBottom
        >
          {t('تگ ها')}:
          {tags.map((tag, index) => (
            <Box key={index}>
              <Typography
                component={Link}
                to={`/products`}
                state={{ tag: { name: tag.name, id: tag.id } }}
                color="secondary"
                variant="caption"
                sx={{ mx: 0.5 }}
              >
                {tag.name}
              </Typography>
              /
            </Box>
          ))}
        </Typography>
      )}
    </Box>
  )
}
export default ShowCategory
