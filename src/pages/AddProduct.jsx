import { Box } from '@mui/material'

import AddProductFields from '../components/products/addProduct/AddProductFields'

const AddProduct = () => {
  return (
    <Box
      sx={{
        width: 1,
        px: 3,
        py: 3,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <AddProductFields />
    </Box>
  )
}

export default AddProduct
