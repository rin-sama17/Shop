import { ReportGmailerrorred } from '@mui/icons-material'
import {
  Typography,
  Box,
  IconButton,
  Tooltip,
  Button,
  TextField,
} from '@mui/material'
import { CustomDivider, CustomLoading, ProductPrice } from '../../common'
const ProductDetails = ({ product }) => {
  const tags = product.tags.split('/')
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          px: 3,
        }}
      >
        <Typography
          color="text.secondary"
          variant="subtitle2"
          sx={{ mr: 1 }}
          gutterBottom
        >
          دسته بندی:
          <Button color="secondary" sx={{ ml: 1 }} size="small">
            {product.category}
          </Button>
        </Typography>
        <Typography
          color="text.secondary"
          variant="caption"
          sx={{ mr: 1, display: 'flex' }}
          gutterBottom
        >
          تگ ها:
          {tags.map((tag, index) => (
            <>
              <Typography
                color="primary"
                key={index}
                variant="caption"
                sx={{ mx: 0.5 }}
              >
                {tag}
              </Typography>
              /
            </>
          ))}
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Typography color="text.secondary" variant="body1" sx={{ mr: 1 }}>
            توضیحات:
          </Typography>{' '}
          <Typography color="text.primary" variant="body1" sx={{ mr: 1 }}>
            {product.details}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default ProductDetails
