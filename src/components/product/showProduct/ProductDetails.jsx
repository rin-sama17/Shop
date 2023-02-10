import { Box } from '@mui/material'
import { ShowCategory } from '../../common'
const ProductDetails = ({ product }) => {
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
        <ShowCategory category={product.category} tags={product.tags} />
      </Box>
    </>
  )
}

export default ProductDetails
