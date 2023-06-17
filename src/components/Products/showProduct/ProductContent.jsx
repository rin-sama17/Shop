import Grid from '@mui/material/Unstable_Grid2'
import { ProductDetails } from '.'
import ReactImageMagnify from 'react-image-magnify'

const ProductContent = ({ product }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: 1,
        mt: 2,
        justifyContent: 'space-between',
      }}
    >
      <Grid
        xs={12}
        md={4}
        sx={{
          p: 1,
          mt: 5,
          display: 'flex',
          justifyContent: 'center',
          // '&.zoomed-image-container': {
          //   zIndex: 1,
          // },
          // '&.zoomed-image-container': {
          //   left: '0% !important',
          //   right: '100% !important',
          // },
        }}
      >
        <div dir="ltr">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Versace',
                isFluidWidth: true,
                src: `http://localhost:8000/${product.image}`,
                sizes:
                  '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
              },
              largeImage: {
                src: `http://localhost:8000/${product.image}`,
                width: 1426,
                height: 2000,
              },
              lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
            }}
            enlargedImagePosition="over"
          />
        </div>
      </Grid>
      <ProductDetails product={product} />
    </Grid>
  )
}

export default ProductContent
