import Grid from '@mui/material/Unstable_Grid2'
import { ProductDetails } from '.'
import { ShowCategory } from '../../common'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { ArrowLeft } from '@mui/icons-material'
import ReactImageMagnify from 'react-image-magnify'
import { c11 } from '../../../assets'
const ProductContent = ({ product }) => {
  return (
    <Grid container spacing={2} sx={{ width: 1 }}>
      <Grid xs={12} md={4}>
        <ShowCategory categoryId={product.category_id} tags={product.tags} />
      </Grid>

      <ProductDetails product={product} />
      <Grid
        xs={12}
        md={4}
        sx={{
          p: 1,
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          direction: 'rtl',
        }}
      >
        <ReactImageMagnify
          {...{
            // smallImage: {
            //   alt: 'Wristwatch by Ted Baker London',
            //   isFluidWidth: true,
            //   src: `http://localhost:8000/${product.image}`,
            // },
            // largeImage: {
            //   src: `http://localhost:8000/${product.image}`,
            //   width: 1200,
            //   height: 1800,
            //   background: 'hsla(0, 0%, 100%, .3)',
            //   border: '1px solid #ccc',
            // },
            // hintTextMouse: ' ',
            // isHintEnabled: true,
            // shouldHideHintAfterFirstActivation: false,
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
        />
      </Grid>
    </Grid>
  )
}

export default ProductContent
