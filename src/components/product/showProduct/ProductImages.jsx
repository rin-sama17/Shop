import {
  Box,
  CardMedia,
  AvatarGroup,
  Button,
  useMediaQuery,
  Skeleton,
} from '@mui/material'
import { Suspense, useContext } from 'react'
import { useTheme } from '@mui/styles'
import { CustomLoading } from '../../common'
import MainContext from '../../../context'
const ProductImages = ({ setOpen }) => {
  const { product, loading } = useContext(MainContext)

  console.log(product)
  const theme = useTheme()
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      {' '}
      <Suspense
        fallback={
          <Skeleton
            height="300px"
            width="100%"
            animation="pulse"
            variant="rectangular"
          />
        }
      >
        {' '}
        <Box sx={{ mb: 1, width: 1 }}>
          <img src={product.thumbnail} alt="" style={{ width: '100%' }} />
        </Box>
      </Suspense>
      <AvatarGroup
        variant="rounded"
        max={downMd ? 2 : 3}
        sx={{ my: 2, px: 1, alignItems: 'center' }}
        slotProps={{
          additionalAvatar: {
            sx: {
              ml: '1px !important',
              bgcolor: 'secondary.main',
              height: 50,
              width: 50,
              display: loading ? 'none' : null,
            },
            onClick: () => setOpen(true),
          },
        }}
      >
        {product.images &&
          product.images.map((item, index) => (
            <Button
              sx={{ p: 0, width: 60, height: 60, mr: 1 }}
              key={index}
              onClick={() => setOpen(true)}
            >
              <CustomLoading
                animation="pulse"
                variant="rectangular"
                loading={loading}
              >
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={item}
                  width={60}
                  height={60}
                />
              </CustomLoading>
            </Button>
          ))}
      </AvatarGroup>
    </>
  )
}

export default ProductImages
